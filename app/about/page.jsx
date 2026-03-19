
import Image from "next/image";
import Footer from "../components/footer/Footer";
import GallerySlider from "../components/slider/GallerySlider";
import Facilities from "../components/Facilities/facilities";
export default function About() {
  return (
    <div className="w-full">
      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/contact_pic.jpg"
          alt="Contact Hero"
          fill
          className="object-cover"
        />
      </div>
        <h1 className=" w-full flex items-center justify-center py-3 bg-[#6b705c] text-white text-3xl md:text-4xl font-bold">
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
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 text-center">
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
    <GallerySlider/>
    <Facilities/>
    <Footer/>
    </div>
  );
}