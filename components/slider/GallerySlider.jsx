'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MoveRight, MoveLeft } from "lucide-react";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fetchAPI } from "../../lib/fetchAPI";

const GallerySlider = ({ sliderData }) => {
  if (!sliderData || sliderData.length === 0) return null;

  return (
    <div className="w-full max-w-[1400px] mx-auto py-10 px-4 md:px-12 mt-10 mb-16 relative group/slider">
      
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
        /* Custom Pagination */
        .gallery-swiper .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          background: #4a7c59;
        }
        /* Disabled state for custom arrows */
        .gallery-prev-btn.swiper-button-disabled,
        .gallery-next-btn.swiper-button-disabled {
          opacity: 0.35;
          cursor: auto;
          pointer-events: none;
        }
      `}</style>
      
      {/* Custom Navigation arrows */}
      <div className="gallery-prev-btn absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#5a6e3a] bg-white flex items-center justify-center cursor-pointer text-[#5a6e3a] hover:bg-[#5a6e3a] hover:text-white transition-all duration-300 shadow-lg group opacity-0 group-hover/slider:opacity-100">
        <MoveLeft strokeWidth={1.5} size={28} className="group-hover:-translate-x-1 transition-transform" />
      </div>
      <div className="gallery-next-btn absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#5a6e3a] bg-white flex items-center justify-center cursor-pointer text-[#5a6e3a] hover:bg-[#5a6e3a] hover:text-white transition-all duration-300 shadow-lg group opacity-0 group-hover/slider:opacity-100">
        <MoveRight strokeWidth={1.5} size={28} className="group-hover:translate-x-1 transition-transform" />
      </div>

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
        navigation={{
          prevEl: '.gallery-prev-btn',
          nextEl: '.gallery-next-btn',
        }}
        pagination={{ clickable: true }}
        className="gallery-swiper !pb-20"
      >
        {sliderData.map((item) => (
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
export default GallerySlider;