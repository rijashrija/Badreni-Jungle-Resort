import PageHero from "../../components/hero/PageHero";
import Footer from "../../components/footer/Footer";
import RoomCard from "../../components/rooms/RoomCard";
import roomsData from "../../public/data/rooms.json";

export default function Rooms() {
  return (
    <div className="w-full">
      <PageHero src="/images/Chitwan-NP.jpg" alt="Rooms Hero" />
      <h1 className=" w-full flex items-center justify-center py-3 bg-[#6b705c] text-white text-3xl md:text-4xl font-bold">
        Our Rooms
      </h1>
      
      {/* Content here */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {roomsData.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}