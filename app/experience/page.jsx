import PageHero from "../../components/hero/PageHero";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import ExperienceIntroSlider from "../../components/experience/ExperienceIntroSlider";

export default function Experience() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <PageHero src="/images/experiences-slide-img.png" alt="Experience Hero" />
      <h1 className="w-full flex items-center justify-center py-3 bg-[#6b705c] text-white text-3xl md:text-4xl font-bold">
        Our Experiences
      </h1>
      
      {/* Intro Section */}
      <section className="w-full bg-white py-16 px-4 md:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-cormorant italic text-gray-800 mb-6">
            Immerse Yourself in the Wild
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base">
            With that in mind, <span className="font-bold">Badreni</span> offers a range of jungle activities in Chitwan with meaningful interaction with local culture that provides knowledge and an experience that the guests can take away with them. And naturally, to continue the great tradition of safaris in our oldest national park, a true jungle experience with our expert naturalists on our canoes and jeeps.
          </p>
        </div>

        {/* Image Slider (Now a separate Client Component) */}
        <ExperienceIntroSlider />
      </section>

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
}

