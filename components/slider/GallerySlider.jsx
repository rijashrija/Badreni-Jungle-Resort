'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import data from "../../public/data/about_slider.json";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GallerySlider() {
  if (!data || data.length === 0) return null;

  return (
    <div className="w-full max-w-[1400px] mx-auto py-10 px-4 md:px-8 mt-10 mb-16">
      
      {/* Custom styles for the cool active slide pop-out animation */}
      <style>{`
        .gallery-swiper .swiper-slide {
          transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.6s ease;
          opacity: 0.4;
          transform: scale(0.85);
        }
        .gallery-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 10;
        }
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: white;
          background-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        .gallery-swiper .swiper-button-next:hover,
        .gallery-swiper .swiper-button-prev:hover {
          background-color: white;
          color: black;
          transform: scale(1.1);
        }
        .gallery-swiper .swiper-button-next::after,
        .gallery-swiper .swiper-button-prev::after {
          font-size: 20px;
        }
      `}</style>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        slidesPerView={1.2}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        className="gallery-swiper !pb-20"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
             <div className="relative h-[300px] md:h-[450px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
               <img
                 src={item.imageUrl}
                 alt={item.title}
                 className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110"
               />
               
               {/* Vignette Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity duration-300 pointer-events-none" />
               
               {/* Title */}
               <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 pointer-events-none">
                 <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wide section_title drop-shadow-md">
                   {item.title}
                 </h3>
                 <div className="w-12 h-[2px] bg-white mt-4 opacity-80" />
               </div>
             </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
