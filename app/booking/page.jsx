import PageHero from "../../components/hero/PageHero";
import Footer from "../../components/footer/Footer";
import BookingForm from "../../components/booking/BookingForm";
import { fetchAPI } from "../../lib/fetchAPI";

export default async function BookingPage() {
  const roomsData = await fetchAPI("rooms.json");

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <PageHero 
        src="/images/img1.png" 
        alt="Booking Hero" 
      />
      
      <div className="bg-[#6b705c] w-full py-6 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-cormorant font-bold">
          Book Your Sanctuary
        </h1>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <BookingForm roomsData={roomsData} />
      </main>

      <Footer />
    </div>
  );
}
