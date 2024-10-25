'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

const slides = [
  {
    id: 1,
    title: 'always fresh & always crispy & always hot',
    image: '/slide1.jpeg',
  },
  {
    id: 2,
    title: 'we deliver your order wherever you are in NY',
    image: '/slide2.jpeg',
  },
  {
    id: 3,
    title: 'the best pizza to share with your family',
    image: '/slide3.jpeg',
  },
  {
    id: 4,
    title: 'the best pizza to share with your family',
    image: '/slide4.jpeg',
  },
];

const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to control fade effect

  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5000 milliseconds (5 seconds)

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const handleNext = () => {
    setFade(false); // Start fade out
    setTimeout(() => {
      setCurrentSlideIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
      setFade(true); // Start fade in after changing the image
    }, 501); // Match this duration with the fade-out duration
  };

  const handlePrevious = () => {
    setFade(false); // Start fade out
    setTimeout(() => {
      setCurrentSlideIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
      setFade(true); // Start fade in after changing the image
    }, 501); // Match this duration with the fade-out duration
  };

  return (
    <div className="relative flex max-h-[calc(100vh-120px)] items-center justify-center bg-black">
      <div
        className={`transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
      >
        <Image
          src={slides[currentSlideIndex].image}
          alt={slides[currentSlideIndex].title} // Use title for better accessibility
          width={1675}
          height={600}
          className=""
        />
      </div>

      <div
        className="absolute bottom-[0%] left-0 top-[0%] flex h-full w-[10%] cursor-pointer items-center justify-center text-3xl font-bold text-yellow-500 duration-300 hover:bg-white hover:opacity-10"
        onClick={handlePrevious}
      >
        <MdOutlineKeyboardArrowLeft className="" />
      </div>

      <div
        className="absolute bottom-[0%] right-0 top-[0%] flex h-full w-[10%] cursor-pointer items-center justify-center text-3xl font-bold text-yellow-500 duration-300 hover:bg-white hover:opacity-10"
        onClick={handleNext}
      >
        <MdOutlineKeyboardArrowRight />
      </div>
    </div>
  );
};

export default Slider;
