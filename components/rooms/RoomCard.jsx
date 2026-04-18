"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// styles
import "swiper/css";
import "swiper/css/navigation";

export default function RoomCard({ room }) {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white max-w-5xl mx-auto mb-10 overflow-hidden border border-gray-100">
      {/* Left side: Slider */}
      <div className="w-full md:w-[55%] relative group">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.room-swiper-button-next',
            prevEl: '.room-swiper-button-prev',
          }}
          loop={true}
          className="h-[300px] md:h-[400px] w-full"
        >
          {room.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`${room.title} image ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
          {/* Custom Arrows */}
          <div className="room-swiper-button-prev absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-[#6b705c] hover:bg-[#5a604c] text-white w-10 h-10 flex items-center justify-center cursor-pointer transition-colors opacity-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="room-swiper-button-next absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-[#6b705c] hover:bg-[#5a604c] text-white w-10 h-10 flex items-center justify-center cursor-pointer transition-colors opacity-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </Swiper>
      </div>

      {/* Right side: Info */}
      <div className="w-full md:w-[45%] p-6 md:p-10 flex flex-col justify-center">
        <h2 className="text-[22px] md:text-[26px] text-gray-800 font-light mb-1 font-sans">{room.title}</h2>
        <p className="text-gray-500 mb-6 font-sans">
          <span className="text-gray-800">{room.price}</span> <span className="text-sm">({room.plan})</span>
        </p>

        <p className="text-gray-600 mb-6 text-sm leading-relaxed max-w-[90%] font-sans">
          {room.description}
        </p>

        <div className="space-y-3 mb-8 text-sm text-gray-600 font-sans">
          <div className="flex">
            <span className="w-24 text-gray-500">Room Size:</span>
            <span className="text-gray-800">{room.roomSize}</span>
          </div>
          <div className="flex">
            <span className="w-24 text-gray-500">Bed Type:</span>
            <span className="text-gray-800">{room.bedType}</span>
          </div>
          <div className="flex">
            <span className="w-24 text-gray-500">Occupancy:</span>
            <span className="text-gray-800">{room.occupancy}</span>
          </div>
        </div>

        <div className="mt-auto">
          <Link href={`/rooms/${room.id}`} className="text-xs tracking-widest text-[#6b705c] underline mb-6 block hover:text-[#4a503c] transition-colors uppercase font-sans">
            View Details
          </Link>
          <button className="bg-[#6b705c] hover:bg-[#5a604c] text-white text-xs tracking-widest px-8 py-3 uppercase transition-colors font-sans">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
