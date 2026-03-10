"use client";
import Link from "next/link";
import Image from "next/image";
import useFetchApi from "../../hooks/useFetchAPI";

export default function Footer() {
  const { data, loading, error } = useFetchApi("/data/footerData.js");

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <footer className="relative bg-[#6f7652] text-white pt-16 pb-6 px-6 md:px-16 mt-30 overflow-hidden">
      {/* 🌿 Left Leaf */}
      <div className="absolute bottom-0 left-0 opacity-20 pointer-events-none">
        <Image
          src="/images/leafleft.png"
          alt="Leaf Decoration"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* 🌿 Right Leaf */}
      <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
        <Image
          src="/images/leafright.png"
          alt="Leaf Decoration"
          width={350}
          height={350}
          className="object-contain"
        />
      </div>

      {/* Responsive Grid */}
      <div
        className="relative z-10 grid gap-10
                   grid-cols-1
                   sm:grid-cols-2
                   lg:grid-cols-3
                   xl:grid-cols-4"
      >
        {/* Column 1 */}
        <div className="flex flex-col">
          {/* Logo — only this is shifted left */}
          <div className="-ml-6 md:-ml-16 mb-6">
            <Link href={data.logo.link}>
              <Image
                src={data.logo.img}
                alt="Logo"
                width={300}
                height={200}
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Content below — normal alignment */}
          <div className="space-y-3 text-sm">
            {/* Location */}
            <div className="flex items-start gap-2">
              <Image
                src="/images/location.png"
                alt="Location"
                width={18}
                height={18}
                className="object-contain"
              />
              <p>{data.contact.address}</p>
            </div>

            {/* Phone Numbers */}
            {data.contact.phones.map((phone, i) => (
              <a
                key={i}
                href={phone.link}
                className="flex items-center gap-2 hover:text-green-300 transition"
              >
                <Image
                  src="/images/phone.png"
                  alt="Phone"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                {phone.number}
              </a>
            ))}

            {/* Email */}
            <a
              href={data.contact.email.link}
              className="flex items-center gap-2 hover:text-green-300 transition"
            >
              <Image
                src="/images/email.png"
                alt="Email"
                width={16}
                height={16}
                className="object-contain"
              />
              {data.contact.email.address}
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {data.social.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                    className="hover:scale-110 transition"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="pt-10">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {data.quickLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.link}
                  className="hover:text-green-300 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Column 3 */}
        <div className="pt-10">
          <h3 className="font-semibold mb-4">Experiences</h3>
          <ul className="space-y-2 text-sm">
            {data.experiences.map((exp, i) => (
              <li key={i}>
                <Link
                  href={exp.link}
                  className="hover:text-green-300 transition"
                >
                  {exp.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="pt-10">
          <h3 className="font-semibold mb-4">Reservation Office</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <Image
                src="/images/location.png"
                alt="Location"
                width={18}
                height={18}
                className="object-contain"
              />
              <p>{data.reservation.address}</p>
            </div>

            {data.contact.phones.map((phone, i) => (
              <a
                key={i}
                href={phone.link}
                className="flex items-center gap-2 hover:text-green-300 transition"
              >
                <Image
                  src="/images/phone.png"
                  alt="Phone"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                {phone.number}
              </a>
            ))}

            <a
              href={data.contact.email.link}
              className="flex items-center gap-2 hover:text-green-300 transition"
            >
              <Image
                src="/images/email.png"
                alt="Email"
                width={16}
                height={16}
                className="object-contain"
              />
              {data.contact.email.address}
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/40 my-8 relative z-10"></div>

      {/* Copyright */}
      <p className="text-center text-sm text-white/80 relative z-10">
        {data.copyright}
      </p>
    </footer>
  );
}
