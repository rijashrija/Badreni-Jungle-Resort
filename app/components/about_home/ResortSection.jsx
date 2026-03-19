"use client";

import Image from "next/image";
import Link from "next/link";
import useFetchApi from "../../hooks/useFetchAPI";
import Button from "../buttons/button";

const ResortSection = () => {
  const { data, loading, error } = useFetchApi("/data/resorts.js", "resorts");

  if (loading) return <p>Loading resorts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="mt-20 mx-5">
      {data?.map((resort) => (
        <div
          key={resort.id}
          className="flex flex-col lg:flex-row gap-6 mx-5 items-center 
          transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 p-4"
        >
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-3/4 overflow-hidden">
            <Image
              src={resort.image}
              alt={resort.title}
              width={500}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 p-6">
            <h1 className="section_title text-center transition-colors duration-300 hover:text-[#6b705c]">
              {resort.title}
            </h1>

            <div className="bg-[#FEFFD3] bg-[url('/images/about_bg.png')] p-8 flex flex-col items-center  transition-all duration-300 hover:shadow-lg">
              <p className="text-justify mb-4">{resort.description}</p>

              <Link href={`/resorts/${resort.slug}`}>
                <Button
                  className="bg-[#6b705c] text-white px-8 py-3 rounded-lg 
                transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#556052]"
                >
                  Explore More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ResortSection;
