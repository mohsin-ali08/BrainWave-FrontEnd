"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobile = () => setIsMobile(!isMobile);

  return (
    <nav className="bg-white p-3 shadow-md">
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
  <button className="my-button px-4 py-2 ">
    Get Started
  </button>
</Link>

        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobile} className="text-[#9B2C2C]">
            {isMobile ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobile ? "block" : "hidden"
        } md:hidden flex flex-col items-center mt-4 space-y-4 transition-all duration-300`}
      >
        {["Home", "Tutors", "Webinars", "Subjects"].map((item, index) => (
          <Link
            key={index}
            href={`/${item.toLowerCase()}`}
            className="relative text-[#9B2C2C] font-semibold group transition duration-300 ease-in-out"
          >
            {item}
            {/* Hover Effect for Mobile */}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#9B2C2C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </Link>
        ))}

        {/* Get Started Button */}
        <Link href="/get-started">
          <button className="bg-[#9B2C2C] text-[#F5F5DC] px-4 py-2 rounded hover:bg-[#B81E1E] transition">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
