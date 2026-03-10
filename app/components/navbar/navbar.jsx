"use client";

import { useState, useEffect } from "react";
import useFetchApi from "../../hooks/useFetchAPI";
import Button from "../buttons/button";

const Navbar = () => {
  const {
    data: navLinks,
    loading: loadingNav,
    error: errorNav,
  } = useFetchApi("/data/navlinks.js", "navLinks");

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loadingNav) return <p>Loading...</p>;
  if (errorNav) return <p>Error: {errorNav}</p>;

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-3 sm:px-6 py-2 sm:py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg text-black"
            : "bg-transparent backdrop-blur-sm text-white"
        }`}
      >
        {/* Logo */}
        <div className="logo">
          <img
            src="/images/logo.jpeg"
            alt="Logo"
            className="h-6 sm:h-8 md:h-10 w-auto"
          />
        </div>

        <div className="navlinks flex items-center space-x-4">
          {/* Desktop Links */}
          <ul className="hidden lg:flex space-x-6">
            {navLinks?.map((link) => (
              <li key={link.id} className="relative group">
                {link.subLinks ? (
                  <>
                    <a
                      href={link.link}
                      className={`cursor-pointer transition-colors duration-300 ${
                        scrolled
                          ? "text-black hover:text-blue-500"
                          : "text-white hover:text-blue-300"
                      }`}
                    >
                      {link.title}
                    </a>

                    {/* Dropdown */}
                    <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow rounded py-2 min-w-[160px]">
                      {link.subLinks.map((sub) => (
                        <li key={sub.id}>
                          <a
                            href={sub.link}
                            className="block px-4 py-2 hover:bg-gray-100 text-black"
                          >
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={link.link}
                    className={`transition-colors duration-300 ${
                      scrolled
                        ? "text-black hover:text-blue-500"
                        : "text-white hover:text-blue-300"
                    }`}
                  >
                    {link.title}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Burger Button */}
          <button
            onClick={() => setOpen(true)}
            className="p-1 sm:p-2 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 sm:w-6 sm:h-6 ${
                scrolled ? "text-black" : "text-white"
              }`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z" />
            </svg>
          </button>

          {/* BOOK NOW Button */}
          <Button className="bg-[#6b705c] text-white px-8 py-3 hover:scale-105 transition-transform duration-300">
            BOOK NOW
          </Button>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Offcanvas Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[40vw] max-w-[420px] bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-xl">
            ×
          </button>
        </div>

        <div className="p-6 space-y-4 text-gray-700">
          <p>Sample Text 1</p>
          <p>Sample Text 2</p>
          <p>Sample Text 3</p>
          <p>Sample Text 4</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
