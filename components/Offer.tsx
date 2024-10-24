import Image from "next/image";
import React from "react";


const Offer = () => {
  return (
    <div className="bg-black h-[50vh] p-5 flex flex-col lg:flex-row ">
      {/* TEXT CONTAINER */}
      <div className="flex-1 gap-2 p-5 text-yellow-500 flex flex-col justify-center items-start text-2xl ">
        <p className="  font-bold ">Delicious Burger & French Fry</p>
        <p className="">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        {/* <CountDown/> */}
        <button className="bg-yellow-500 text-white py-3 px-3">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
