import data from "../../public/data/facilities.json";
import {
  Store, Coffee, Tv, Speaker, Sun, Shield,
  Wifi, Wind, AppWindow, GlassWater, Bath, Droplets
} from "lucide-react";

// Map icon string → Lucide component
const iconMap = {
  "outdoor-furniture": Store,
  "room-service":      Coffee,
  "tv":                Tv,
  "sound-system":      Speaker,
  "outdoor-terrace":   Sun,
  "safe-box":          Shield,
  "wifi":              Wifi,
  "air-conditioning":  Wind,
  "windows":           AppWindow,
  "mini-bar":          GlassWater,
  "bathtub":           Bath,
  "sinks":             Droplets,
};
const Facilities = () => {

   if (!data || data.length === 0) return <p>No data found.</p>;

  return (
    <section className="w-full px-6 py-14 bg-white">

      {/* Title */}
      <h2 className="text-center text-4xl text-[#5a6e3a] mb-10"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
        Our Facilities
      </h2>

      {/* Bordered Box */}
      <div className="border border-[#7a8c5a] rounded-sm mx-auto max-w-5xl px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {data.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.id} className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  {Icon
                    ? <Icon size={28} strokeWidth={1.2} className="text-[#7a8c5a]" />
                    : <span className="text-[#7a8c5a] text-xl">•</span>
                  }
                </div>
                {/* Label */}
                <span className="text-[#5a6e3a] text-base leading-snug"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
export default Facilities;