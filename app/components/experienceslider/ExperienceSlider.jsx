"use client";

import { useState } from "react";
import Image from "next/image";
import useFetchApi from "../../hooks/useFetchAPI";

const ExperienceSlider = () => {
  const { data, loading, error } = useFetchApi(
    "/data/experiences.js",
    "experiences",
  );

  const [current, setCurrent] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);

  if (loading)
    return <p className="text-center mt-20">Loading experiences...</p>;
  if (error) return <p className="text-center mt-20">Error: {error}</p>;
  if (!data || data.length === 0) return null;

  const slide = data[current];

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));

  const openPopup = (index) => {
    setPopupIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => setIsPopupOpen(false);

  const nextPopup = (e) => {
    e.stopPropagation();
    setPopupIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevPopup = (e) => {
    e.stopPropagation();
    setPopupIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <>
      <section
        className="relative  flex items-center justify-center text-white py-24 mt-30"
        style={{
          backgroundImage: `url(${slide.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <h2 className="absolute top-10 text-2xl md:text-3xl font-light z-10 section_title">
          Find your Sanctuary Experience
        </h2>

        <button
          onClick={prevSlide}
          className="absolute left-6 md:left-10 text-5xl z-20"
        >
          &#8592;
        </button>

        <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center mx-5 mt-7">
          {/* IMAGE CONTAINER */}
          <div
            className="w-full lg:w-[420px] h-[450px] relative overflow-hidden rounded-md shadow-lg cursor-pointer"
            onClick={() => openPopup(current)}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="max-w-md flex flex-col gap-3">
            <h3 className="text-xl md:text-2xl text-center section_title font-light ">
              {slide.title}
            </h3>
            <div className="w-64 h-[1px] bg-white mx-auto mb-3"></div>
            <p className="border border-white/40 p-6 w-70 text-sm leading-relaxed">
              {slide.description}
            </p>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-6 md:right-10 text-5xl z-20"
        >
          &#8594;
        </button>

        <div className="absolute bottom-6 flex gap-3 z-20">
          {data.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                index === current ? "bg-white" : "bg-white/40"
              }`}
            ></span>
          ))}
        </div>
      </section>

      {/* POPUP MODAL */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={closePopup}
            >
              &times;
            </button>

            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={data[popupIndex].image}
                alt={data[popupIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={prevPopup}
              className="absolute left-6 text-white text-3xl"
            >
              &#8592;
            </button>

            <button
              onClick={nextPopup}
              className="absolute right-6 text-white text-3xl"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceSlider;
