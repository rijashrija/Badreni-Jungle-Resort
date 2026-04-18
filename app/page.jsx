import React from "react";
import Image from "next/image";
import { fetchAPI } from "../lib/fetchAPI";
import VideoSection from "../components/video/VideoSection";
import ResortSection from "../components/about_home/ResortSection";
import ThreeInOneSection from "../components/threeinone_section/threeinone";
import ExperienceSlider from "../components/experienceslider/ExperienceSlider";
import BlogSection from "../components/blogs/BlogSection";
import ReviewsSection from "../components/reviews/ReviewSection";
import GallerySection from "../components/gallery/GallerySection";
import Footer from "../components/footer/Footer";
const Index = async () => {
  const reviewsData = await fetchAPI("reviewsData.json");
  const galleryData = await fetchAPI("galleryData.json");

  console.log("Hello from Index component!");
  return (
    <div>
      <VideoSection />
      <ResortSection />
      <ThreeInOneSection />
      <ExperienceSlider />
      <BlogSection />
      <div className="pt-20">
        <ReviewsSection reviewsData={reviewsData} />
      </div>
      <GallerySection galleryData={galleryData} />

      {/* CTA Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/about_img.png"
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-cormorant mb-6 leading-tight">
            Unforgettable Jungle Getaways Tailored Just for You
          </h2>
          <p className="text-sm md:text-base opacity-90 leading-relaxed mb-10 max-w-3xl mx-auto">
            At Badreni Jungle Resort, our curated packages are more than just bookings &mdash; they are immersive journeys into the heart of Chitwan. Whether you&apos;re seeking thrilling wildlife safaris, romantic escapes, or peaceful retreats surrounded by nature, we&apos;ve crafted the perfect experiences for every kind of traveler.
          </p>
          <a href="/contact">
            <button className="bg-[#838b63] hover:bg-[#6b705c] text-white px-10 py-4 uppercase tracking-widest transition-all duration-300 rounded-none font-bold cursor-pointer">
              Contact Us
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
