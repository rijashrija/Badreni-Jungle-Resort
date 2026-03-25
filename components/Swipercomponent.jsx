"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Swipercomponent({ data }) {
  return (
    <div className="w-full py-10 px-4">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
        className="!pb-12"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}