import React from 'react';
import { FiFacebook, FiInstagram , FiLinkedin } from 'react-icons/fi';
import Image from 'next/image';

const AnimatedFooter: React.FC = () => {
  return (
    <div className="bg-white  py-3">
      <div className="max-w-7xl mx-auto flex justify-between px-3 md:px-8 items-center">
         {/* Logo */}
               <div className=''>
                 <Image src="/logo.png" alt="Logo" width={45} height={45} />
               </div>

               <div>
                <h4 className='text-gray-500 text-sm md:text-md'>© 2025 BrainWave. All rights reserved. </h4>
               </div>

        {/* Social Media Icons */}
        <div className="flex text-[#9B2C2C] md:space-x-6 space-x-3 text-xl">
          <FiFacebook className="cursor-pointer  hover:text-blue-600" />
          <FiLinkedin className="cursor-pointer hover:text-blue-900" />
          <FiInstagram className="cursor-pointer hover:text-pink-600" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedFooter;
