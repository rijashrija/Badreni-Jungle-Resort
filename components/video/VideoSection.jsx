"use client";
import React, { useState } from "react";
import Image from "next/image";
import { heroVideo } from "../../public/data/video.js";
const VideoSection = () => {
  
  const [showOfferPopup, setShowOfferPopup] = useState(false);
const videoSrc = heroVideo?.[0]?.video ? heroVideo[0].video : "/images/video1.mp4";
  const handleOfferIconClick = () => {
    setShowOfferPopup(true);
  };

  const handleWhatsAppIconClick = () => {
    window.open("https://wa.me/", "_blank");
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Icons Section */}
      <div className="flex flex-col items-end justify-end gap-3 sm:gap-4 absolute bottom-4 sm:bottom-5 right-3 sm:right-5 z-10">
        {/* Offer Tag + Icon */}
        <div className="flex items-center gap-2">
          <span className="bg-[#6b7d4f] text-white text-sm px-3 py-1 rounded-sm shadow-md whitespace-nowrap">
            Offers
          </span>

          <Image
            src="/images/offer_icon.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-8 sm:w-10 md:w-12 lg:w-14 h-auto cursor-pointer"
            alt="Offer Icon"
            onClick={handleOfferIconClick}
          />
        </div>

        {/* WhatsApp Icon */}
        <Image
          src="/images/whatsapp.png"
          width={0}
          height={0}
          sizes="100vw"
          className="w-12 sm:w-14 md:w-16 lg:w-20 h-auto cursor-pointer"
          alt="WhatsApp Icon"
          onClick={handleWhatsAppIconClick}
        />
      </div>

      {/* Offer Popup */}
      {showOfferPopup && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/50 flex justify-center items-center z-20">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-2">Offer Popup</h2>
            <p className="text-sm mb-4">This is the offer content.</p>
            <button
              className="px-4 py-1 bg-gray-800 text-white rounded"
              onClick={() => setShowOfferPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
