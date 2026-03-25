"use client";

import Image from "next/image";
import data from "../../public/data/threeinone.json";

export default function ThreeInOneSection() {

  return (
    <section className="grid md:grid-cols-3 gap-y-4 mt-30">
      {data?.map((item, index) => (
        <div key={index} className="relative group overflow-hidden h-[90vh]">
          {/* Background Image */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 transition duration-700 ease-in-out"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <p className="text-lg mb-2 tracking-wide">{item.title}</p>

            <h2 className="text-sm section_title md:text-2xl font-light mb-6">
              {item.heading}
            </h2>

            <button className="border border-white px-6 py-3 hover:bg-white hover:text-black transition duration-300">
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
