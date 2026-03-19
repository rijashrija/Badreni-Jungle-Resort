'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import useFetchApi from "../../hooks/useFetchAPI";

export default function GallerySlider() {
  const { data, loading, error } = useFetchApi("/data/about_slider.js", "about_slider");
  const [currentIndex, setCurrentIndex] = useState(1); // start at 1 because 0 is the cloned last group
  const [isAnimating, setIsAnimating] = useState(true);
  const autoplayRef = useRef(null);
  const slidesPerView = 3;

  // Build groups: [cloned_last, ...real_groups, cloned_first]
  const groups = data
    ? Array.from({ length: Math.ceil(data.length / slidesPerView) }, (_, i) =>
        data.slice(i * slidesPerView, i * slidesPerView + slidesPerView)
      )
    : [];

  const totalGroups = groups.length;

  // Slides = [cloned last] + [real groups] + [cloned first]
  const slides = totalGroups > 0
    ? [groups[totalGroups - 1], ...groups, groups[0]]
    : [];

  const totalSlides = slides.length;

  const goTo = useCallback((index, animate = true) => {
    setIsAnimating(animate);
    setCurrentIndex(index);
  }, []);

  const next = useCallback(() => {
    goTo(currentIndex + 1);
  }, [currentIndex, goTo]);

  const prev = useCallback(() => {
    goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  // After sliding to a clone, silently jump to the real slide
  useEffect(() => {
    if (!isAnimating) return;

    let timeout;

    if (currentIndex === totalSlides - 1) {
      // Reached cloned first → jump silently to real first (index 1)
      timeout = setTimeout(() => goTo(1, false), 500);
    } else if (currentIndex === 0) {
      // Reached cloned last → jump silently to real last
      timeout = setTimeout(() => goTo(totalGroups, false), 500);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, totalSlides, totalGroups, isAnimating, goTo]);

  // Autoplay
  useEffect(() => {
    if (!data) return;
    autoplayRef.current = setInterval(next, 3000);
    return () => clearInterval(autoplayRef.current);
  }, [next, data]);

  // Pause autoplay on hover
  const pauseAutoplay = () => clearInterval(autoplayRef.current);
  const resumeAutoplay = () => {
    autoplayRef.current = setInterval(next, 3000);
  };

  if (loading) return <p className="text-center py-10 text-gray-500">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Error: {error}</p>;
  if (!data) return null;

  // Real dot index (exclude clones)
  const activeDotIndex = currentIndex === 0
    ? totalGroups - 1
    : currentIndex === totalSlides - 1
    ? 0
    : currentIndex - 1;

  return (
    <div
      className="relative w-full py-6"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Slider Track */}
      <div className="overflow-hidden px-10">
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isAnimating ? 'transform 500ms ease-in-out' : 'none',
          }}
        >
          {slides.map((group, groupIndex) => (
            <div key={groupIndex} className="flex gap-4 min-w-full">
              {group.map((item, i) => (
                <div key={i} className="flex-1">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                </div>
              ))}
              {/* Fill empty slots if last group has fewer than 3 images */}
              {group.length < slidesPerView &&
                Array.from({ length: slidesPerView - group.length }).map((_, i) => (
                  <div key={`empty-${i}`} className="flex-1" />
                ))
              }
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-1 top-1/2 -translate-y-1/2 z-10
          w-9 h-9 rounded-full bg-white shadow-md
          flex items-center justify-center
          hover:bg-gray-100 transition-colors duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-10
          w-9 h-9 rounded-full bg-white shadow-md
          flex items-center justify-center
          hover:bg-gray-100 transition-colors duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {groups.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i + 1)}
            className={`h-2.5 rounded-full transition-all duration-300
              ${i === activeDotIndex ? 'w-6 bg-[#4a7c59]' : 'w-2.5 bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}


