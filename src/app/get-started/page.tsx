"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FiUser, FiBookOpen } from "react-icons/fi";
import Image from "next/image";

const GetStarted = () => {
  const router = useRouter();

  const handleNavigation = (role: string) => {
    router.push(`/${role}-login`);
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-3 px-6">
        <div className="text-2xl font-bold text-[#9B2C2C]">
          <Image src="/logo.png" alt="Logo" width={45} height={45} />
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <h2 className="text-3xl font-bold text-[#9B2C2C] mb-8">
          How do you want to Get Started?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 w-full max-w-3xl">
          {/* Student Section */}
          <div
            onClick={() => handleNavigation("#")}
            className="cursor-pointer flex flex-col items-center justify-center border-2 border-[#9B2C2C] rounded-lg p-6 transition-transform transform hover:scale-105 bg-white"
          >
            <FiBookOpen size={60} className="text-[#9B2C2C] mb-4" />
            <h3 className="text-xl font-semibold text-[#9B2C2C]">Student</h3>
          </div>

          {/* Tutor Section */}
          <div
            onClick={() => handleNavigation("#")}
            className="cursor-pointer flex flex-col items-center justify-center border-2 border-[#9B2C2C] rounded-lg p-6 transition-transform transform hover:scale-105 bg-white"
          >
            <FiUser size={60} className="text-[#9B2C2C] mb-4" />
            <h3 className="text-xl font-semibold text-[#9B2C2C]">Tutor</h3>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-md py-4 md:px-20 px-6 flex justify-between items-center">
        <button
          onClick={handleBack}
          className="text-[#9B2C2C] text-lg hover:text-red-800 transition px-6 py-2 rounded border border-[#9B2C2C]"
        >
          Back
        </button>
        <button
          onClick={() => router.push("/student-login")}
          className="bg-[#9B2C2C] text-white py-2 px-4 rounded-md hover:bg-red-800 transition my-button"
        >
          Continue 
        </button>
      </footer>
    </div>
  );
};

export default GetStarted;
