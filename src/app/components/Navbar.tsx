"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger and close icons

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Toggle mobile view
  const toggleMobile = () => setIsMobile(!isMobile);

  return (
    <nav className="bg-[#FFFF] p-3 shadow-md">
      <div className="container mx-auto flex items-center md:justify-around justify-between">
        {/* Left: Logo */}
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={45} 
            height={45}
            className="h-13"
          />
        </div>
        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-6 text-[#9B2C2C] ">
          <Link href="/" className="hover:text-[#000] font-semibold">
            Home
          </Link>
          <Link href="/tutors" className="hover:text-[#000] font-semibold ">
            Tutors
          </Link>
          <Link href="/webinars" className="hover:text-[#000] font-semibold">
            Webinars
          </Link>
          <Link href="/subjects" className="hover:text-[#000] font-semibold">
            Subjects
          </Link>
        </div>

        {/* Right: Get Started Button */}
        <div className="hidden md:flex items-center">
          <Link href="/get-started">
            <button className="bg-[#9B2C2C] text-sm text-[#F5F5DC] px-4 py-2 rounded hover:bg-[#B81E1E]">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobile} className="text-[#9B2C2C]">
            {isMobile ? (
              <FiX size={24} /> // Close icon
            ) : (
              <FiMenu size={24} /> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className="md:hidden flex flex-col items-center mt-4 space-y-4 transition-all duration-300 ease-in-out transform"
        >
          <Link href="/" className="text-[#9B2C2C] hover:text-[#000]">
            Home
          </Link>
          <Link href="/tutors" className="text-[#9B2C2C] hover:text-[#000]">
            Tutors
          </Link>
          <Link href="/webinars" className="text-[#9B2C2C] hover:text-[#000]">
            Webinars
          </Link>
          <Link href="/subjects" className="text-[#9B2C2C] hover:text-[#000]">
            Subjects
          </Link>

          {/* Get Started Button */}
          <Link href="/get-started">
            <button className="bg-[#9B2C2C] text-[#F5F5DC] px-4 py-2 rounded hover:bg-[#B81E1E]">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
