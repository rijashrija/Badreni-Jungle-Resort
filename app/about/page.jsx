
import Image from "next/image";
import { fetchAPI } from "../../lib/fetchAPI";
import Footer from "../../components/footer/Footer";
import GallerySlider from "../../components/slider/GallerySlider";
import Facilities from "../../components/Facilities/facilities";
import PageHero from "../../components/hero/PageHero";
export default async function About() {
  const sliderData = await fetchAPI("about_slider.json");

  return (
    <div className="w-full">
      {/* Hero Image */}
      <PageHero src="/images/contact_pic.jpg" alt="About Hero" />
        <h1 className=" w-full flex items-center justify-center py-3 bg-[#6b705c] text-white text-3xl md:text-4xl font-cormorant font-bold">
          About Us
        </h1>

{/* about inner */}
<section className="w-full bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT: IMAGE */}
        <div className="w-full h-[300px] md:h-[500px] relative">
          <Image
            src="/images/about_img.png" 
            alt="About"
            fill
            className="object-cover "
            priority
          />
        </div>

        {/* RIGHT: TEXT */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-cormorant font-semibold text-[#5a6e3a] mb-6 text-center">
            Get to know about us
          </h2>

          <p className="text-gray-600 text-justify leading-relaxed space-y-5 text-[14px]">
            Badreni is more than just a name — it’s a vision brought to life.
            Founded with the belief that passion and purpose can drive real
            change, we are committed to creating meaningful experiences that
            connect people, ideas, and communities.
            <br />
            Every project we take on is fueled by creativity, innovation, and a
            dedication to quality, ensuring that what we offer is not only
            impactful but also memorable.
            <br />
            At Badreni, we embrace challenges as opportunities, striving to grow
            and evolve while staying true to our values of integrity,
            collaboration, and excellence.
            <br />
            Our mission is to inspire, empower, and make a difference — whether
            through the services we provide, the connections we foster, or the
            positive change we aim to create in the world.
            <br />
            With a team that shares a love for what we do, Badreni stands as a
            place where ideas flourish, ambitions are realized, and every effort
            contributes to a brighter, more connected future.
          </p>
        </div>
      </div>
    </section>
    <GallerySlider sliderData={sliderData} />
    <Facilities/>

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

    <Footer/>
    </div>
  );
}