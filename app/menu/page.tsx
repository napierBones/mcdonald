import { menu } from "@/data/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 min-h-[calc(100vh-120px)]  flex flex-col md:flex-row items-center justify-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full min-h-[33%] bg-cover p-8 md:min-h-[50%]"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} gap-3 flex flex-col justify-start items-start max-w-[50%]`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm ">{category.desc}</p>
            <button className={`bg-black text-white py-2 px-4 `}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
