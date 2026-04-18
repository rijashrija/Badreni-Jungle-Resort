import Image from "next/image";

export default function PageHero({ src, alt }) {
  return (
    <div className="relative w-full h-[300px] md:h-[400px]">
      <Image
        src={src}
        alt={alt || "Hero Image"}
        fill
        className="object-cover"
      />
    </div>
  );
}
