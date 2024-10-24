'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[calc(100vh-120px)]  w-full items-center justify-center  flex">
      <div className="relative flex h-full w-full items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full h-full absolute inset-0 flex  items-center justify-center transition-opacity duration-1000 ease-in-out  ${
              currentSlide === index ? 'z-10 opacity-100' : 'z-0 opacity-0'
            } flex flex-col lg:flex-row`}
          >
                       {/* image container */}
            <div className="relative  w-full h-full">
              <Image src={slide.image} alt="" fill className="" />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 m-auto flex -translate-x-1/2 transform gap-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex h-3 w-3 cursor-pointer items-center justify-center rounded-full ring-1 ring-gray-600 ${
              currentSlide === index ? 'scale-150' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            {currentSlide === index && (
              <div className="absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gray-600"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

// return (
//   <div className="flex h-[calc(100vh-120px)]">
//     {/* TEXT CONTAINER */}
//     <div className="flex flex-1 flex-col items-center justify-center gap-2 bg-yellow-300 font-bold text-white">
//       <p className="p-4 text-center text-2xl uppercase">
//         {data[currentSlide].title}
//       </p>
//       <button className="bg-red-500 px-4 py-4 text-white">Order Now</button>
//     </div>

//     {/* IMAGE CONTAINER */}
//     <div className="relative h-full w-full flex-1">
//       <Image src={data[currentSlide].image} alt="" fill className="" />
//     </div>
//   </div>
// );
// };
