import PageHero from "../../components/hero/PageHero";
import Footer from "../../components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import packagesData from "../../public/data/packages.json";
import Button from "../../components/buttons/button";

export default function Packages() {
  return (
    <div className="w-full">
      <PageHero src="/images/contact_pic.jpg" alt="Packages Hero" />
      <h1 className="w-full flex items-center justify-center py-3 bg-[#6b705c] text-white text-3xl md:text-4xl font-bold">
        Our Packages
      </h1>
      
      {/* Content here */}
      <section className="py-12 md:py-20 px-4 bg-white min-h-[40vh]">
        <div className="max-w-6xl mx-auto">
          {/* Intro Description */}
          <p className="text-center text-gray-500 mb-12 md:mb-16 leading-relaxed max-w-4xl mx-auto">
            Discover the best of Chitwan with <span className="font-semibold text-[#6b705c]">Badreni Jungle Resort</span>. Our curated packages are designed to offer you a seamless blend of adventure, culture, and relaxation. Whether you&apos;re seeking a quick getaway or an immersive jungle retreat, we have the perfect itinerary for you. Experience the wild like never before with our expert naturalists and warm hospitality.
          </p>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packagesData.map((pkg) => (
              <div key={pkg.id} className="relative group rounded-sm overflow-hidden h-[300px] md:h-[400px] cursor-pointer shadow-md">
                <Image 
                  src={pkg.image} 
                  alt={pkg.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
                  <h3 className="text-white text-2xl md:text-3xl font-cormorant mb-2 leading-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base line-clamp-2 mb-4">
                    {pkg.description}
                  </p>
                  <Link href={`/packages/${pkg.id}`}>
                    <Button className="border border-white/50 text-white hover:bg-white hover:text-black transition-all duration-300 w-fit rounded-none px-6 py-2 uppercase tracking-wide text-xs">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
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
          <Link href="/contact">
            <Button className="bg-[#838b63] hover:bg-[#6b705c] text-white px-10 py-4 uppercase tracking-widest transition-all duration-300 rounded-none font-bold">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}