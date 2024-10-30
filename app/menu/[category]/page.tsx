import { ProductType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    {
      cache: 'no-store',
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch menu products form db');
  }
  return res.json();
};

const CategoryPage = async ({
  params,
}: {
  params: {
    category: string;
  };
}) => {
  const { category } = await params;
  const products: ProductType[] = await getData(category);
  return (
    <div className="flex min-h-[calc(100vh-120px)] w-full flex-wrap items-start justify-evenly bg-black p-5">
      {products.map(item => (
        <Link
          className="flex w-[45%] cursor-pointer flex-col items-center justify-evenly gap-5 bg-[#1C1816] p-2 md:w-[30%]  lg:w-[25%] 2xl:w-[20%]"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="">
              <Image
                src={item.img}
                alt=""
                height={1000}
                width={1000}
                className=""
              />
            </div>
          )}
          {/* TEXT CONTAINER */}

          <div className="flex h-full w-full flex-wrap justify-between font-bold text-yellow-600 text-lg md:text-sm lg:text-2xl xl:text-3xl">
            <span className="uppercase">{item.title}</span>
            <span className="">${item.price}</span>
            <button className="bg-red-500 p-2 uppercase text-white">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
