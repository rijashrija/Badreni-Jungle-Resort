"use client";
import { useState } from "react";
import data from "../../public/data/galleryData.json";
import Image from "next/image";
import { fetchAPI } from "../../lib/fetchAPI";
const GallerySection = ({ galleryData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!galleryData || galleryData.length === 0) return <p>No data found.</p>;

  const openPopup = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  return (
    <>
      <section className="max-w-6xl mx-auto mt-30 pb-12 px-5">
        <h2 className="text-center text-2xl font-light mb-2 section_title">
          Experience the Moments
        </h2>
        <p className="text-center mb-10 text-gray-500">
          <span className="inline-flex items-center gap-2">
            <Image
              src="/images/insta.png"
              alt="Instagram icon"
              width={34}
              height={34}
              className="object-cover rounded-md"
            />
            @badrenijgleresort
          </span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <div
              key={item.id}
              className="w-full h-64 relative overflow-hidden rounded-md cursor-pointer"
              onClick={() => openPopup(index)}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="
                  object-cover
                  rounded-md
                  shadow-md
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </section>

      {/* POPUP MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close */}
            <button
              onClick={closePopup}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              &times;
            </button>

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={galleryData[currentIndex].image}
                alt={galleryData[currentIndex].alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-3xl"
            >
              &#8592;
            </button>

            <button
              onClick={nextImage}
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

export default GallerySection;
