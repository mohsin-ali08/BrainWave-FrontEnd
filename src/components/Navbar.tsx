"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobile = () => {
    setIsMobile(!isMobile);
    document.body.classList.toggle("overflow-hidden", !isMobile); // Prevents scrolling when menu is open
  };

  return (
    <nav className="bg-white p-3 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between md:justify-around">
        {/* Logo */}
        <div>
          <Image src="/logo.png" alt="Logo" width={45} height={45} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {["Home", "Tutors", "Webinars", "Subjects"].map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase()}`}
              className="relative text-[#9B2C2C] font-semibold group transition duration-300 ease-in-out"
            >
              {item}
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#9B2C2C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          ))}
        </div>

        {/* Get Started Button */}
        <div className="hidden md:flex">
          <Link href="/get-started">
            <button className=" px-4 py-2 rounded my-button">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobile} className="text-[#9B2C2C]">
            {isMobile ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white shadow-lg transform ${
          isMobile ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 flex flex-col items-center justify-center space-y-6 md:hidden`}
      >
        {/* Close Button Inside the Menu */}
        <button
          onClick={toggleMobile}
          className="absolute top-5 right-5 text-[#9B2C2C] text-3xl"
        >
          <FiX />
        </button>

        {["Home", "Tutors", "Webinars", "Subjects"].map((item, index) => (
          <Link
            key={index}
            href={`/${item.toLowerCase()}`}
            onClick={toggleMobile}
            className="text-[#9B2C2C] font-semibold text-xl"
          >
            {item}
          </Link>
        ))}

        {/* Get Started Button */}
        <Link href="/get-started">
          <button
            onClick={toggleMobile}
            className="bg-[#9B2C2C] text-white px-6 py-3 rounded-lg hover:bg-red-800 transition text-lg"
          >
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
