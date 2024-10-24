import { featuredProducts } from '@/data/data';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-evenly gap-y-5  bg-black py-5 text-black">
      {/* WRAPPER */}

      {/* SINGLE ITEM */}
      {featuredProducts.map(item => (
        <div
          key={item.id}
          className="bg-[#1C1816] flex h-[500px] lg:h-96  w-[70%]  lg:w-96 flex-col items-center justify-center p-2 transition-all duration-300 "
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-3/4 w-full">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex w-full h-1/4 justify-between items-center p-5 text-2xl font-bold text-yellow-600">
           
              <span className="uppercase">{item.title}</span>
              <span className="">${item.price}</span>
    
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
