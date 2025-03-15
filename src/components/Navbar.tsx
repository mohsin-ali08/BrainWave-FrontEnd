"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiHome, FiUser, FiVideo, FiBook , FiFacebook, FiLinkedin, FiInstagram, } from "react-icons/fi";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMobile = () => {
    setIsMobile(!isMobile);
    document.body.classList.toggle("overflow-hidden", !isMobile); // Prevents scrolling when menu is open
  };

  return (
    <nav className={`bg-white p-2 shadow fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isMounted ? "fade-in" : ""}`}>
      <div className="container mx-auto flex items-center justify-between md:justify-around">
        {/* Logo */}
        <div className={`transition-transform duration-500 ease-in-out transform hover:scale-110 ${isMounted ? "animate-fade-in" : ""}`}>
          <Image src="/logo.png" alt="Logo" width={45} height={45} />
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex space-x-6 ${isMounted ? "animate-fade-in" : ""}`}>
          {[
             { name: "Home", href: "/Home" },
             { name: "Tutors", href: "/Tutors" },
             { name: "Webinars", href: "/Webinars" },
             { name: "Subjects", href: "/Subjects" },

          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="relative text-[#9B2C2C] font-semibold group transition duration-500 ease-in-out transform hover:scale-105"
            >
              {item.name}
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#9B2C2C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
            </Link>
          ))}
        </div>

        {/* Get Started Button */}
        <div className={`hidden md:flex ${isMounted ? "animate-fade-in" : ""}`}>
          <Link href="/get-started">
            <button className="px-4 py-2 rounded my-button transition-transform duration-500 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobile} className="text-[#9B2C2C] transition-transform duration-500 ease-in-out transform hover:scale-110">
            {isMobile ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full backdrop-blur-xl border-b border-[#9B2C2C] rounded-lg bg-opacity-20 bg-white shadow-lg transform ${
          isMobile ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 flex flex-col items-center pt-24 space-y-6 md:hidden`}
      >

        {/* logo here  */}
        <div className="absolute top-8 left-5 transition-transform duration-500 ease-in-out transform hover:scale-110">
          <Image src="/logo.png" alt="Logo" width={45} height={45} />
        </div>

        {/* Close Button Inside the Menu */}
        <button
          onClick={toggleMobile}
          className="absolute top-1 right-5 text-[#9B2C2C] text-3xl transition-transform duration-500 ease-in-out transform hover:scale-110"
        >
          <FiX />
        </button>
        
        {[
           { name: "Home", href: "/Home" , icon: <FiHome /> },
           { name: "Tutors", href: "/Tutors", icon: <FiUser /> },
           { name: "Webinars", href: "/Webinars", icon: <FiVideo /> },
           { name: "Subjects", href: "/Subjects" , icon: <FiBook /> },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            onClick={toggleMobile}
            className="text-[#9B2C2C] font-semibold text-xl flex items-center space-x-2 transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}

        {/* Get Started Button */}
        <Link href="/get-started">
          <button
            onClick={toggleMobile}
            className="bg-[#9B2C2C] text-white px-6 py-3 rounded-lg hover:bg-red-800 transition text-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            Get Started
          </button>
        </Link>
            {/* Social Media Icons */}
            <div className="absolute bottom-8 flex flex-col items-center space-y-2">
            <h3 className="text-[#9B2C2C] text-lg font-semibold">Social Links !</h3>
            <div className="flex space-x-6 text-2xl text-[#9B2C2C]">
              <FiFacebook className="cursor-pointer hover:text-blue-600" />
              <FiLinkedin className="cursor-pointer hover:text-blue-900" />
              <FiInstagram className="cursor-pointer hover:text-pink-600" />
            </div>
            </div>
      </div>
    </nav>
  );
};

export default Navbar;
