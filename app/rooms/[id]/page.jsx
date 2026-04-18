import Footer from "../../../components/footer/Footer";
import roomsData from "../../../public/data/rooms.json";

export default async function RoomDetail({ params }) {
  const { id } = await params;
  const room = roomsData.find((r) => r.id === parseInt(id));

  if (!room) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Room not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Spacer for Navbar since it is fixed */}
      <div className="h-20 sm:h-24 md:h-28"></div>

      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-cormorant font-bold text-gray-800 text-center">
          {room.title}
        </h1>
        <p className="mt-6 text-gray-500 text-lg uppercase tracking-widest italic">
          Room Details Coming Soon
        </p>
        <div className="w-20 h-1 bg-[#6b705c] mt-8"></div>
      </div>

      <Footer />
    </div>
  );
}
