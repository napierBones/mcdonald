import Image from "next/image";
import React from "react";


const Offer = () => {
  return (
    <div className="bg-black min-h-[50vh] p-5 flex flex-wrap ">
      {/* TEXT CONTAINER */}
      <div className="flex-1 gap-5 flex-wrap p-5 text-yellow-500 flex flex-col  justify-start items-start 2xl:text-4xl ">
        <p className="  font-bold ">Delicious Burger & French Fry</p>
        <p className="">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        {/* <CountDown/> */}
        <button className="bg-yellow-500 text-white py-3 px-3">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="max-w-[50%]">
        <Image src="/offerProduct.png" width={1710} height={841} alt="" className="" />
      </div>
    </div>
  );
};

export default Offer;
