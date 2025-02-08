import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center px-4 md:px-10"
      style={{ backgroundImage: 'url("/your-bg-image.jpg")' }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        {/* Left Section: Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Revolutionary Way To Educate
          </h1>
          <p className="text-lg text-gray-700 max-w-md mx-auto lg:mx-0">
            Online education is electronically supported learning that relies on
            the Internet for teacher/student interaction and the distribution of
            class materials.
          </p>
          <button className="px-6 py-3 bg-[#9B2C2C] text-white font-semibold rounded-lg shadow-lg hover:bg-red-800 transition">
            Register Now
          </button>
        </div>

        {/* Right Section: Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[90%] max-w-[400px] md:max-w-[450px] lg:max-w-[500px]">
            {/* Teacher Image */}
            <Image
              src="/Teacher.jpg"
              alt="Teacher"
              width={250}
              height={250}
              className="absolute top-8 left-0 w-[120px] sm:w-[160px] md:w-[200px] lg:w-[250px]"
            />
            {/* Student Image */}
            <Image
              src="/Student.png"
              alt="Student"
              width={200}
              height={200}
              className="absolute bottom-[-40px] right-0 w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px]"
            />
            {/* Icons Image */}
            <Image
              src="/Icons.png"
              alt="Icons"
              width={180}
              height={180}
              className="absolute top-[120px] left-[50%] transform -translate-x-1/2 w-[70px] sm:w-[100px] md:w-[120px]"
            />

            {/* Chat Messages */}
            <div className="absolute top-[-50px] left-[20%] space-y-3">
              <button className="bg-gray-100 text-[#9B2C2C] font-semibold px-3 py-1 rounded-lg shadow-md border border-gray-200">
                Hi!
              </button>
              <button className="bg-gray-100 text-[#9B2C2C] font-semibold px-2 py-1 rounded-lg shadow-md border border-gray-200">
                Are you ready!
              </button>
              <button className="text-white bg-[#9B2C2C] font-semibold px-2 py-1 rounded-lg shadow-lg border-2 border-[#9B2C2C]">
                Ready 24/7 to learn.
              </button>
              <button className="text-white bg-[#9B2C2C] font-semibold px-2 py-1 rounded-lg shadow-lg border-2 border-[#9B2C2C]">
                Hello
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
