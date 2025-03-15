"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar, FaClock, FaVideo } from "react-icons/fa";

const webinars = [
  {
    id: 1,
    image: "/webinar01.png",
    name: "Design",
    rating: 4.8,
    course: "Blockchain Technology",
    description:
      "Learn how blockchain is revolutionizing industries and how you can leverage it.",
    time: "2 PM - 4 PM",
  },
  {
    id: 2,
    image: "/webinar02.png",
    name: "Design",
    rating: 4.7,
    course: "App Development",
    description:
      "Discover the best practices in mobile and web app development.",
    time: "5 PM - 7 PM",
  },
  {
    id: 3,
    image: "/webinar03.png",
    name: "IT",
    rating: 4.9,
    course: "Artificial Intelligence",
    description:
      "Dive deep into AI trends and innovations shaping the future.",
    time: "6 PM - 8 PM",
  },
];

const Webinar = () => {
  return (
    <div>
    <section className=" px-6 flex flex-col items-center text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-gray-800"style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Join Our Exclusive Webinars
      </motion.h2>

      {/* Webinars Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {webinars.map((webinar, index) => (
          <motion.div
            key={webinar.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="relative bg-white shadow-lg rounded-xl overflow-hidden text-left flex flex-col justify-between" 
          >
            {/* Recommended Badge */}
            <div className="absolute top-4 left-4 bg-white bg-opacity-50 text-[#9B2C2C] px-4 py-1 text-sm font-semibold rounded-md backdrop-blur-lg">
              Recommended
            </div>

            {/* Webinar Image */}
            <Image
              src={webinar.image}
              alt={webinar.name}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />

            {/* Card Content */}
            <div className="px-5 py-2 pb-10 flex flex-col flex-grow">
              {/* Webinar Name & Rating */}
              <div className="flex justify-between items-center">
                <h3 className="text-sm text-gray-300">{webinar.name}</h3>
                <div className="flex items-center text-[#FFA135]">
                  <FaStar /> <span className="ml-1 text-black">{webinar.rating}</span>
                </div>
              </div>

              {/* Course Name */}
              <p className="text-gray-900 text-xl mt-2">{webinar.course}</p>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-2 flex-grow">
                {webinar.description}
              </p>

              {/* Time & Zoom Icons */}
              <div className="mt-4 flex justify-between text-gray-700 border-t-[1.4px] border-dashed pt-2">
                <div className="flex items-center gap-2">
                  <FaClock /> <span className="text-gray-300 text-sm">{webinar.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaVideo className="text-blue-400" /> <span className="text-gray-300 text-sm">Zoom</span>
                </div>
              </div>
            </div>
            {/* Button (Positioned at Bottom Border, Overlapping Slightly) */}
            <button className="relative bottom-5 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#9B2C2C] text-white px-5 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-all">
              Join Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>

    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col-reverse md:flex-row items-center justify-center bg-gray-100 border"
    >
      {/* Content Area */}
      <div className="w-full md:w-1/2 lg:w-1/3 space-y-6 p-4 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#9B2C2C]" style={{ fontFamily: 'Playfair Display, serif' }}>Become a Tutor</h2>
      <p className="text-gray-600 text-justify">Are you passionate about teaching and making a difference in students lives? Join our team of dedicated tutors and turn your knowledge into a rewarding experience. Whether you&apos;re an expert in technology, arts, sciences, or any other field, we provide the platform to connect with eager learners.</p>
      <button className="my-button px-6 py-2">Register Now</button>
      </div>

      {/* Image Area */}
      <div className=" relative w-full md:w-1/2 lg:w-1/3 flex mb-6 md:mb-0 p-4 md:p-8">
      <motion.img 
        src="./tutorimgs/Ellipse 26.png"
        width={10}
        height={10} 
        alt="Sample" 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-auto h-24 absolute top-28 left-20"
      />
     
      <motion.img 
        src="./tutorimgs/Ellipse 27.png"
        width={20}
        height={20} 
        alt="Sample" 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" absolute top-20 right-36"
      />
      <motion.img 
        src="./tutorimgs/Ellipse 25.png"
        width={20}
        height={20} 
        alt="Sample" 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" absolute top-12 left-36 h-10 w-auto"
      />
      <motion.img 
        src="./tutorimgs/Ellipse 25.png"
        width={20}
        height={20} 
        alt="Sample" 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" absolute top-40 right-16 h-12 w-auto"
      />
     
      <motion.img 
        src="/tutor.png" 
        alt="Sample" 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-auto"
      />
      </div>
    </motion.section>





</div>

  );
};

export default Webinar;
