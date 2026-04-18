import Image from "next/image";
import Link from "next/link";
import data from "../../public/data/blogs.json";
import Button from "../buttons/button";
import { fetchAPI } from "../../lib/fetchAPI";

const BlogSection = async() => {
  const blogs = await fetchAPI("blogs.json");
 if (!blogs || blogs.length === 0) return <p>No data found.</p>; 

  return (
    <section className="pb-20 px-6 mt-30">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-light section_title tracking-wide">
          Our Blogs
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.map((blog) => (
          <div
            key={blog.id}
            className="group bg-white shadow-sm flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="bg-[#e6e7c7] p-6 flex flex-col gap-4 flex-1 transition-colors duration-300 group-hover:bg-[#e1e2bf]">
              <p className="text-sm text-gray-600">{blog.date}</p>

              <h3 className="text-lg font-medium transition-colors duration-300 group-hover:text-[#656D4A]">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                {blog.description}
              </p>

              {/* Right Aligned Button */}
              <div className="flex justify-end mt-auto">
                <Link href={`/blogs/${blog.slug}`}>
                  <Button className="border border-[#656D4A] text-[#656D4A] bg-transparent hover:bg-[#656D4A] hover:text-white">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="flex justify-center mt-16">
        <Link href="/blogs">
          <Button className="bg-[#6b705c] text-white px-8 py-3 hover:scale-105 transition-transform duration-300">
            View All
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
