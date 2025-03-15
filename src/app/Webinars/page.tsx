import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

const Tutors = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-4xl w-full mx-4 text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-[#9B2C2C] mb-6">Welcome to the  Webinar Page!</h1>
        <p className="text-gray-700 mb-6">
          Explore our amazing tutors who are here to guide you towards success.  
          Whether you need help with academic subjects, webinars, or personal coaching, you&apos;re in the right place!
        </p>
        
        <div className="flex justify-around mt-10">
          {/* Tutor Section */}
          
           
        

          {/* Webinars Section */}
          <div className="flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer">
            <div className="bg-[#9B2C2C] p-4 rounded-full text-white">
              <FiMessageCircle size={40} />
            </div>
            <h2 className="text-lg font-semibold mt-4 text-[#9B2C2C]">Webinars</h2>
            <p className="text-gray-600 text-sm">Join our live sessions</p>
          </div>
        </div>
        
        <button className="mt-10 px-6 py-3 bg-[#9B2C2C] text-white font-bold rounded-lg shadow-md hover:bg-red-800 transition-transform transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Tutors;
