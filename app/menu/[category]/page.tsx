import { pizzas } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex h-full w-full flex-wrap  justify-center gap-5 bg-black p-5">
      {pizzas.map((item) => (
        <Link className="cursor-pointer flex flex-col items-center justify-evenly gap-5 bg-[#1C1816] p-2 min-w-[250px]  w-[45%] md:-w-[30%] lg:w-[25%] 2xl:w-[20%]" href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="">
              <Image src={item.img} alt=""  height={1000}
                width={1000} className=""/>
            </div>
          )}
          {/* TEXT CONTAINER */}
         
          <div className="flex flex-wrap w-full h-full items-center justify-between md:text-lg  font-bold text-yellow-600">
            <span className="uppercase">{item.title}</span>
            <span className="">${item.price}</span>
            <button className=" uppercase bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
