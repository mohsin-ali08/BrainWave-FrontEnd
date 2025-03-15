import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div className="bg-gray-200  p-6" style={{ backgroundImage: 'url("./Contact/Vector.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col lg:flex-row justify-around items-center relative space-y-10 lg:space-y-0 lg:space-x-10 md:px-10">
        {/* Content Section */}
        <div className="text-center lg:text-left backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 p-6 rounded-lg">
          <h2 className="md:text-4xl text-3xl font-bold mb-4 text-[#b43535] animate-fadeIn">Ready to Get Started? Contact Us Now!</h2>
          <p className="text-gray-600 text-left mb-6 animate-fadeIn">
            Have questions or want to learn more? Reach out to our team for personalized support. We’re just a message away!
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 p-8 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white rounded-2xl shadow-xl animate-slideInRight">
          <h2 className="text-4xl font-bold mb-4 text-[#952c2c]">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-gray-600 font-medium">Name</label>
              <input type="text" className=" bg-transparent w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b43535] text-gray-600 bg-black backdrop-filter backdrop-blur-xl bg-opacity-10" placeholder="Your Name" />
            </div>
            <div>
              <label className="block  mb-1 text-gray-600 font-medium">Email</label>
              <input type="email" className="bg-transparent backdrop-filter backdrop-blur-xl bg-opacity-10  w-full p-3 border rounded-lg focus:outline-none bg-black focus:ring-2 focus:ring-[#b43535]" placeholder="Your Email" />
            </div>
            <div>
              <label className="block mb-1 text-gray-600 font-medium">Message</label>
              <textarea className="bg-transparent backdrop-filter backdrop-blur-xl bg-opacity-10 bg-black w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b43535]" rows={5} placeholder="Your Message"></textarea>
            </div>
            <button className="w-full my-button py-3">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
