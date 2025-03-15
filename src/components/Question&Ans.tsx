"use client";
import { FC, useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQSection: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: 'What is this platform about?',
      answer: 'This platform is designed to provide you with helpful resources and guidance for your learning journey.'
    },
    {
      question: 'How can I get started?',
      answer: 'Simply explore the various sections and follow the provided tutorials and resources.'
    },
    {
      question: 'Is this platform free to use?',
      answer: 'Yes, everything on this platform is completely free to access.'
    },
    {
      question: 'Can I contribute to this platform?',
      answer: 'Absolutely! Feel free to share your knowledge and resources to help others.'
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen md:pb-12">
      {/* New Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center w-full bg-[#9B2C2C] md:pl-20 h-content md:h-[500px] lg:h-[350px]">
        <div className="lg:w-1/2 space-y-6 lg:text-left p-4">
          <h2 className="text-[1.6rem] md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Why Brainwave Tutoring?</h2>
          <p className="text-gray-200  text-justify mb-6">
            Join our community of learners and take your skills to the next level. Discover amazing resources, tutorials, and guidance curated just for you.
          </p>
          <div className="flex-col space-y-3 lg:flex-row items-center mb-4 text-justify px-3">
            <div className="flex items-center mb-2 lg:mb-0 lg:mr-4">
              <Star className="text-gray-100 mr-2" />
              <p className="text-white">Highly qualified educators dedicated to your growth.</p>
            </div>
            <div className="flex items-center mb-2 lg:mb-0 lg:mr-4">
              <Star className="text-gray-100 mr-2" />
              <p className="text-white">Tailored plans to match your unique goals.</p>
            </div>
            <div className="flex items-center">
              <Star className="text-gray-100 mr-2" />
              <p className="text-white">Study anytime, anywhere with online and offline support.</p>
            </div>
            <div className='py-4'>
          <Link href="/get-started" className="bg-gray-100 text-[#9B2C2C] py-2 px-6 rounded font-semibold transition-all hover:bg-[#9B2C2C] hover:text-white  ">
            Register Now
          </Link>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative mb-8 lg:mb-0">
          <div className="relative h-60 w-full bottom-6 md:w-[700px] md:h-[400px] overflow-visible">
            <Image
              src="/QA.png"
              alt="Learning"
              layout="fill"
              objectFit="contain"
              className="absolute  bottom-12 left-0 md:bottom-2 md:left-0"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-3xl mt-12 px-4">
        <h2 className="md:text-3xl text-[2rem] font-bold mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Your Questions,<span className='text-[#9B2C2C]'> Answered!</span></h2>
        <p className="text-gray-600 mb-8 text-center">Find answers to common questions about our webinars, registration, payments, and more—all in one place.</p>
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4 border border-gray-300 rounded-2xl shadow-md">
            <div
              className="flex justify-between items-center p-4 text-[#9B2C2C] cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <h3 className="text-xl font-medium text-gray-800">{item.question}</h3>
              {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-100 py-5 bg-[#9B2C2C] rounded-b-2xl">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
