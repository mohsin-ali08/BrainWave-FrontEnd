import React from "react";
import Image from "next/image";

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
            Online education is electronically supported learning that relies on
            the Internet for teacher/student interaction and the distribution of
            class materials.
          </p>
          <button
            className="my-button px-5 py-2"
          >
            Register Now
          </button>
        </div>

        {/* Right Section: Images */}
        <div className="w-full md:w-1/2 mt-[130px] md:mt-0 relative">
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
            className="w-48 absolute bottom-[-70px] md:right-[140px] right-[0px]  transform translate-y-12"
          />
          {/* <Image
            src="/Chat.png"
            alt="Image 1"
            layout="intrinsic"
            width={210}
            height={210}
            className="md:w-48 w-36 absolute md:top-[-120px] top-[-70px] md:left-32 left-[76px]"
          /> */}
          <Image
            src="/Icons.png"
            alt="Image 1"
            layout="intrinsic"
            width={200}
            height={200}
            className="w-28 absolute md:top-[130px] md:left-[300px] top-[140px] left-48"
          />
          {/* chat msg section */}
          <div className="w-full absolute md:top-0 md:right-0 right-[50px] top-[10px]">
            <div className=" absolute top-[23px] left-[130px]">
              <button className="bg-gray-100 text-[#9B2C2C] font-semibold px-3 py-1 rounded-lg shadow-md border border-gray-200 relative before:content-[''] before:absolute before:bottom-[-1px] before:left-[-1px] before:w-3 before:h-3 before:bg-gray-100 before:rotate-45 before:translate-x-[%] before:border-l before:border-b before:border-gray-200">
                Hi!
              </button>
            </div>
            <div className=" absolute top-[-23px] left-[130px]">
              <button className="bg-gray-100 text-[#9B2C2C] font-semibold px-2 py-1 rounded-lg shadow-md border border-gray-200 relative before:content-[''] before:absolute before:bottom-[-1px] before:left-[-1px] before:w-3 before:h-2 before:bg-gray-100 before:rotate-45 before:translate-x-[%] before:border-l before:border-b before:border-gray-200">
                Are you ready!
              </button>
            </div>
            <div className=" absolute top-[-65px] left-[150px]">
              <button className="text-white bg-[#9B2C2C] font-semibold px-2 py-1 rounded-lg shadow-lg border-2 border-[#9B2C2C]  relative before:content-[''] before:absolute before:bottom-[-2px] before:left-[152px] before:w-3 before:h-2 before:bg-[#9B2C2C] before:rotate-45 before:translate-x-[%]  ">
                Ready 24/7 to laern.
              </button>
            </div>
            <div className=" absolute top-[-110px] left-[260px]">
              <button className="text-white bg-[#9B2C2C] font-semibold px-2 py-1 rounded-lg shadow-lg border-2 border-[#9B2C2C]  relative before:content-[''] before:absolute before:bottom-[-2px] before:left-[44px] before:w-3 before:h-2 before:bg-[#9B2C2C] before:rotate-45 before:translate-x-[%]  ">
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
