import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center  "
      style={{ backgroundImage: 'url("/Background.png")' }}
    >
      <div className=" mx-auto px-4 pt-12 md:pt-24 text-[#000] flex flex-col md:flex-row items-center justify-around">
        {/* Left Section: Content */}
        <div className="w-full md:w-1/2 text-center  md:text-left md:pl-[130px]">
          <h1 className="text-[2rem] md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Revolutionary Way To Educate.
          </h1>
          <p className="pb-10 text-base md:text-lg ">
            Online education is electronically supported learning that relies on
            the Internet for teacher/student interaction and the distribution of
            class materials.
          </p>
          <button className="my-button px-5 py-2 md:mb-0 mb-10">Register Now</button>
        </div>

        {/* imgs <section     */}

        <div className="w-full md:w-1/2 mt-[200px] md:mt-0  relative md:bottom-12">
          <Image
            src="/Teacher.jpg"
            alt="Image 1"
            layout="intrinsic"
            width={300}
            height={300}
            className="w-48 absolute top-12 md:top-10 md:left-10"
          />

          <Image
            src="/Student.png"
            alt="Girl with Phone"
            layout="intrinsic"
            width={210}
            height={210}
            className="w-48 absolute bottom-[-70px] md:right-[140px] right-[0px] transform translate-y-12"
          />
        
          <Image
            src="/Icons.png"
            alt="Image 1"
            layout="intrinsic"
            width={100}
            height={100}
            className="w-28 absolute md:bottom-[-170px] bottom-[-200px] md:right-[140px] right-[30px] transform translate-y-12"
          />
            {/* chat msg section */}
            <div className="w-full absolute md:top-0 md:right-0 right-[-0]  top-[24px]">
            <div className="absolute md:top-[20px] top-[40px] left-[85px] md:left-[130px]">
              <button className=" bg-gray-100 text-[#9B2C2C] font-semibold px-3 py-1 rounded-lg shadow-md border border-gray-200 relative before:content-[''] before:absolute before:bottom-[-1px] before:left-[-1px] before:w-3 before:h-3 before:bg-gray-100 before:rotate-45 before:translate-x-[%] before:border-l before:border-b before:border-gray-200">
              Hi!
              </button>
            </div>
            <div className="absolute md:top-[-23px]  left-[80px] md:left-[130px]">
              <button className="bg-gray-100  text-[#9B2C2C] font-semibold px-2 py-1 rounded-lg shadow-md border border-gray-200 relative before:content-[''] before:absolute before:bottom-[-1px] before:left-[-1px] before:w-3 before:h-2 before:bg-gray-100 before:rotate-45 before:translate-x-[%] before:border-l before:border-b before:border-gray-200">
              Are you ready!
              </button>
            </div>
            <div className="absolute top-[-65px] left-[50px] md:left-[150px]">
              <button className="text-white md:text-sm text-xs bg-[#9B2C2C] font-semibold px-2 py-1 rounded-lg shadow-lg border-2 border-[#9B2C2C] relative before:content-[''] before:absolute before:bottom-[-2px] before:left-[115px] md:before:left-[134px] before:w-3 before:h-2 before:bg-[#9B2C2C] before:rotate-45 before:translate-x-[%]">
              Ready 24/7 to learn.
              </button>
            </div>
            <div className="absolute md:top-[-110px] top-[-100px] left-[130px] md:left-[260px]">
              <button className="text-white md:text-sm text-xs  bg-[#9B2C2C] font-semibold px-2 py-1 rounded-lg shadow-lg border-2 border-[#9B2C2C] relative before:content-[''] before:absolute before:bottom-[-2px] md:before:left-[39px] before:left-[34px] before:w-3 before:h-2 before:bg-[#9B2C2C] before:rotate-45 before:translate-x-[%]">
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
