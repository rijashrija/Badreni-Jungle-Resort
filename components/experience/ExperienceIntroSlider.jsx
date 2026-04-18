"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ExperienceIntroSlider = () => {
  const introImages = [
    { 
      id: 1, 
      src: "/images/intro/treehouse.png", 
      alt: "Treehouse Resort",
      title: "Luxury Canopy Stay"
    },
    { 
      id: 2, 
      src: "/images/intro/waterfall.png", 
      alt: "Waterfall Resort",
      title: "Secret Waterfalls"
    },
    { 
      id: 3, 
      src: "/images/intro/jaguar.png", 
      alt: "Jaguar Wildlife",
      title: "Wild Safari"
    },
    { 
      id: 4, 
      src: "/images/intro/elephant.png", 
      alt: "Elephant Safari",
      title: "Elephant Safari"
    },
    { 
      id: 5, 
      src: "/images/intro/canoe.png", 
      alt: "Canoe Trip",
      title: "River Canoe Trip"
    },
    { 
      id: 6, 
      src: "/images/intro/culture.png", 
      alt: "Tharu Culture",
      title: "Cultural Heritage"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto relative group px-4 md:px-0">
      <style>{`
        .experience-swiper .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .experience-swiper .swiper-pagination-bullet-active {
          background: #6b705c;
          width: 24px;
          border-radius: 4px;
        }
        .experience-swiper .swiper-pagination {
          bottom: -30px !important;
        }
      `}</style>

      {/* Custom Navigation */}
      <button className="swiper-prev-intro absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#6b705c] transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-[#6b705c] hover:text-white border border-[#6b705c]/20">
        <MoveLeft size={24} />
      </button>
      <button className="swiper-next-intro absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#6b705c] transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-[#6b705c] hover:text-white border border-[#6b705c]/20">
        <MoveRight size={24} />
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        navigation={{
          prevEl: ".swiper-prev-intro",
          nextEl: ".swiper-next-intro",
        }}
        pagination={{ 
          clickable: true,
          el: ".experience-pagination" 
        }}
        loop={introImages.length > 1}
        className="experience-swiper !pb-12"
      >
        {introImages.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="relative h-[350px] md:h-[500px] w-full group cursor-pointer overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
              
              {/* Text Content */}
              <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                <p className="text-[10px] uppercase tracking-[0.2em] mb-2 text-white/80">Experience</p>
                <h3 className="text-xl md:text-2xl font-cormorant italic drop-shadow-lg">
                  {img.title}
                </h3>
                <div className="w-8 h-[1px] bg-white/50 mt-3 group-hover:w-16 transition-all duration-500" />
              </div>

              {/* Hover Lighten */}
              <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Container */}
      <div className="experience-pagination flex justify-center mt-4"></div>
    </div>
  );
};

export default ExperienceIntroSlider;

