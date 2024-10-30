
import { ProductType } from '@/types';
import Image from 'next/image';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch Categories form db');
  }
  return res.json();
};

const Featured = async() => {
  const FeaturedProducts:ProductType[] = await  getData();
  return (
    <div className="flex h-full w-full flex-wrap  justify-center gap-5 bg-black p-5">
      {/* WRAPPER */}

      {/* SINGLE ITEM */}
      {FeaturedProducts.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer flex flex-col items-center justify-evenly gap-5 bg-[#1C1816] p-2  w-[45%] md:-w-[30%] lg:w-[25%] 2xl:w-[20%]"
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
          <p className="flex w-full h-full items-start justify-between text-lg lg:text-sm font-bold text-yellow-600">
            <span className="uppercase">{item.title}</span>
            <span className="">${item.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Featured;
