"use client";

import Image from "next/image";
import { FaCode, FaPaintBrush, FaLeaf, FaBrain, FaLaptopCode, FaHeartbeat, FaGamepad, FaBullhorn, FaPencilRuler } from 'react-icons/fa';

const courses = [
  { name: "Blockchain", icon: <FaCode /> },
  { name: "App Development", icon: <FaLaptopCode /> },
  { name: "Green Technology", icon: <FaLeaf /> },
  { name: "Visual Art", icon: <FaPaintBrush /> },
  { name: "Entrepreneurship", icon: <FaBrain /> },
  { name: "Web Development", icon: <FaCode /> },
  { name: "Digital Marketing", icon: <FaBullhorn /> },
  { name: "Mental Health", icon: <FaHeartbeat /> },
  { name: "Game Development", icon: <FaGamepad /> },
  { name: "Graphic Design", icon: <FaPencilRuler /> }
];

const Subjects = () => {
  return (
    <div>
      {/* 📌 Subject Coverage Section */}
      <section className="flex flex-col items-center text-center py-16 px-5">
        {/* Heading */}
        <h2 className="text-[1.6rem] md:text-4xl font-bold text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span  className="text-[#9B2C2C]">Comprehensive</span> Subject Coverage
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-2xl mt-4">
          Whether it’s cutting-edge technology or creative arts, Brainwave is empowering students to excel in every field.
        </p>

        {/* Grid Layout for Courses */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-5xl">
          {courses.map((course, index) => (
            <div
              key={index}
              className="md:text-md  font-semibold text-black border px-6 py-2 rounded-lg shadow-md bg-white 
                        hover:bg-gray-100 transition cursor-pointer flex items-center justify-center space-x-2"
            >
              {course.icon}
              <span>{course.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 📌 Big Section with Image & Content */}
      <section className="flex flex-col md:flex-row items-center justify-around px-6 py-16 w-full bg-[#9B2C2C] mx-auto">
        
     
        <div className="relative w-full md:w-1/2 flex justify-center">
          <Image
            src="/Group 237656.png" 
            alt="Technology"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>

       
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="md:text-4xl text-[1.6rem] font-bold text-white">
            Learn Smarter with Brainwave!
          </h2>
          <p className="text-lg text-white mt-4">
            At Brainwave, we empower learners of all ages to achieve academic excellence. From personalized tutoring to engaging study plans, we provide the tools and support you need to excel in your studies and beyond. Join a community of curious minds and make learning a rewarding experience.
          </p>

          <ul className="mt-4 space-y-2 text-white">
            <li>✔️ Learn from Industry Experts</li>
            <li>✔️ Hands-on Project-Based Learning</li>
            <li>✔️ Certifications for Your Achievements</li>
          </ul>

          <button className="mt-5 px-5 py-2 bg-white text-[#9B2C2C] font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
            Explore Courses
          </button>
        </div>
      </section>
    </div>
  );
};

export default Subjects;
