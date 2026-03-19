import Image from "next/image";
import Button from "../components/buttons/button";
import Footer from "../components/footer/Footer";
export default function Contact() {
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
          Contact Us
        </h1>

      {/* Contact Info Section */}
      <section className="bg-gray-100 p-8 md:p-16 flex flex-col md:flex-row gap-8">
        {/* Hotel Location */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Hotel Location</h2>
          <div className="flex items-center mb-2">
            <span className="mr-2 text-green-700">📍</span>
            <p>Badreni Road Sauraha, Chitwan, Nepal</p>
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2 text-green-700">📞</span>
            <p>+977 56 593364, +977-9866247923</p>
          </div>
        </div>

        {/* Reservation Office */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Reservation Office</h2>
          <div className="flex items-center mb-2">
            <span className="mr-2 text-green-700">📍</span>
            <p>Narayan Gopal Road, Lazimmpat, Kathmandu</p>
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2 text-green-700">📞</span>
            <p>+977 1 4002027, +977-9866247923</p>
          </div>
        </div>
      </section>

      {/* Contact Form + Map Section */}
      <section className="p-8 md:p-16 flex flex-col md:flex-row gap-8">
        {/* Form */}
        <form className="flex-1 flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <input
            type="text"
            placeholder="Name"
            className="border p-2 rounded-md w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Phone"
            className="border p-2 rounded-md w-full"
          />
          <textarea
            placeholder="Your Message"
            className="border p-2 rounded-md w-full"
            rows={5}
          />
         <Button className="bg-[#6b705c] text-white px-8 py-3 
                transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#556052] w-50 mx-auto">Send Message</Button>
        </form>

        {/* Map */}
        <div className="flex-1">
          <iframe
            className="w-full h-full rounded-lg shadow-md min-h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9573661971966!2d84.4183993!3d27.5545437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39959614b9b81b37%3A0x98b9b26e53bdbadf!2sBadreni%20Jungle%20Resort!5e0!3m2!1sen!2snp!4v1699385565164!5m2!1sen!2snp"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    <Footer/>
    </div>
  );
}
