import React from "react";
import Image from "next/image";
import { FaRegLightbulb } from "react-icons/fa"; // Example icon, you can change this

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: 'url("/your-bg-image.jpg")' }}
    >
      <div className="container mx-auto px-4 py-16 text-[#000] flex flex-col md:flex-row items-center justify-around">
        {/* Left Section: Content */}
        <div className="w-full md:w-1/2 text-center space-y-10 md:text-left md:pl-[130px]">
          <h1 className="text-4xl font-bold mb-4">
          Revolutionary Way To Educate
          </h1>
          <p className="mb-6 text-lg">
          Online education is electronically supported learning that relies on the Internet for teacher/student interaction and the distribution of class materials.
          </p>
          <a
            href="#register"
            className="inline-block bg-[#9B2C2C] text-[#F5F5DC] px-6 py-3 rounded hover:bg-[#B81E1E] transition"
          >
            Register Now
          </a>
        </div>

        {/* Right Section: Images */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
          <Image
            src="/Teacher.jpg"
            alt="Image 1"
            layout="intrinsic"
            width={300}
            height={300}
            className="w-48 absolute top-10 left-10"
          />
          
          <Image
            src="/Student.png"
            alt="Girl with Phone"
            layout="intrinsic"
            width={210}
            height={210}
            className=" w-48 absolute bottom-[-70px] right-[140px] transform translate-y-12"
          />
          <Image
            src="/Chat.png"
            alt="Image 1"
            layout="intrinsic"
            width={210}
            height={210}
            className="w-48 absolute top-[-120px] left-32"
          />
            <Image
              src="/Icons.png"
              alt="Image 1"
              layout="intrinsic"
              width={200}
              height={200}
              className="w-28 absolute top-[130px] left-[300px]"
            />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
