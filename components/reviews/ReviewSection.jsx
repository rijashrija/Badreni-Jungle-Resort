"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import data from "../../public/data/reviewsData.json";
import Image from "next/image";
import Button from "../buttons/button";

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % data.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));

  return (
    <section
      className="relative w-full bg-cover bg-center min-h-[650px] md:h-[650px] bg-no-repeat"
      style={{ backgroundImage: "url('/images/review_bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content wrapper */}
      <div className="max-w-6xl mx-auto h-full relative z-10 flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center py-12 md:py-0">
          {/* LEFT SIDE */}
          <div className="text-white space-y-6 text-center md:text-left">
            <p className="uppercase tracking-widest text-xs sm:text-sm border-b w-fit pb-1 mx-auto md:mx-0">
              Reviews
            </p>

            <h2 className="section_title text-3xl sm:text-4xl md:!text-5xl font-light leading-snug">
              Hear all about us <br className="hidden sm:block" />
              from our guests
            </h2>

            <Button className="bg-white text-black px-5 py-2 text-sm sm:text-base hover:bg-gray-200 transition">
              View All
            </Button>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative border border-white/30 p-6 sm:p-8 md:p-10 text-white flex flex-col items-center transition-transform hover:-translate-y-1 overflow-hidden">
            {/* Sliding Track */}
            <div
              className="flex w-full transition-transform duration-500 ease-in-out will-change-transform"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full w-full shrink-0 flex flex-col items-center text-center px-4 sm:px-6 md:px-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    className="opacity-40 mb-4 w-10 h-10 sm:w-12 sm:h-12"
                  >
                    <path
                      fill="currentColor"
                      d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.87 3.87 0 0 1-2.748-1.179"
                    />
                  </svg>

                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed mb-4 max-w-md">
                    {item.text}
                  </p>

                  <p className="text-xs sm:text-sm opacity-80">{item.author}</p>

                  <div className="mt-4 flex justify-center">
                    <Image
                      src={item.image}
                      alt="Review platform"
                      width={50}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-6">
              {data?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                    current === index ? "bg-white scale-110" : "bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* ARROWS */}
            <div className="absolute bottom-4 right-4 flex gap-3">
              <button
                onClick={prevSlide}
                aria-label="Previous"
                className="hover:opacity-70 transition"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next"
                className="hover:opacity-70 transition"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
