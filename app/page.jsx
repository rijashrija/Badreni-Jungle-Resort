import React from "react";
import VideoSection from "../components/video/VideoSection";
import ResortSection from "../components/about_home/ResortSection";
import ThreeInOneSection from "../components/threeinone_section/threeinone";
import ExperienceSlider from "../components/experienceslider/ExperienceSlider";
import BlogSection from "../components/blogs/BlogSection";
import ReviewsSection from "../components/reviews/ReviewSection";
import GallerySection from "../components/gallery/GallerySection";
import Footer from "../components/footer/Footer";
const Index = () => {
  console.log("Hello from Index component!");
  return (
    <div>
      <VideoSection />
      <ResortSection />
      <ThreeInOneSection />
      <ExperienceSlider />
      <BlogSection />
      <div className="pt-20">
        <ReviewsSection />
      </div>
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
