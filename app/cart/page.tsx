import Image from 'next/image';
import React from 'react';

const CartPage = () => {
  return (
    <div className="flex  h-[calc(100vh-120px)] w-full flex-col bg-black text-white md:flex-row  items-start justify-evenly ">
      {/* cart items */}
      <div className="flex h-3/4 md:h-full md:w-3/4 max-w-[1000px]  w-full flex-col items-center justify-start overflow-y-auto gap-2  p-5">
        <div className="flex flex-shrink-0 h-40 p-5  bg-[#1C1816] w-full items-center justify-evenly">
          <div className="relative h-full w-1/4">
            <Image src={'/temporary/p1.png'} className='object-contain' alt="" fill />
          </div>
          <div className='w-full flex items-start justify-start gap-5'>
            <div className="">Large</div>
            <div className="">200 $</div>
            <div className="">X</div>
            <div className="">1</div>
            <div className="">=</div>
            <div className="">200 $</div>
          </div>
        </div>
        <div className="flex flex-shrink-0 h-40 p-5  bg-[#1C1816] w-full items-center justify-evenly">
          <div className="relative h-full w-1/4">
            <Image src={'/temporary/p1.png'} className='object-contain' alt="" fill />
          </div>
          <div className='w-full flex items-start justify-start gap-5'>
            <div className="">Large</div>
            <div className="">200 $</div>
            <div className="">X</div>
            <div className="">1</div>
            <div className="">=</div>
            <div className="">200 $</div>
          </div>
        </div>
        <div className="flex flex-shrink-0 h-40 p-5  bg-[#1C1816] w-full items-center justify-evenly">
          <div className="relative h-full w-1/4">
            <Image src={'/temporary/p1.png'} className='object-contain' alt="" fill />
          </div>
          <div className='w-full flex items-start justify-start gap-5'>
            <div className="">Large</div>
            <div className="">200 $</div>
            <div className="">X</div>
            <div className="">1</div>
            <div className="">=</div>
            <div className="">200 $</div>
          </div>
        </div>
        <div className="flex flex-shrink-0 h-40 p-5  bg-[#1C1816] w-full items-center justify-evenly">
          <div className="relative h-full w-1/4">
            <Image src={'/temporary/p1.png'} className='object-contain' alt="" fill />
          </div>
          <div className='w-full flex items-start justify-start gap-5'>
            <div className="">Large</div>
            <div className="">200 $</div>
            <div className="">X</div>
            <div className="">1</div>
            <div className="">=</div>
            <div className="">200 $</div>
          </div>
        </div>
        <div className="flex flex-shrink-0 h-40 p-5  bg-[#1C1816] w-full items-center justify-evenly">
          <div className="relative h-full w-1/4">
            <Image src={'/temporary/p1.png'} className='object-contain' alt="" fill />
          </div>
          <div className='w-full flex items-start justify-start gap-5'>
            <div className="">Large</div>
            <div className="">200 $</div>
            <div className="">X</div>
            <div className="">1</div>
            <div className="">=</div>
            <div className="">200 $</div>
          </div>
        </div>
      
       
       
      
      </div>

      {/* total */}
      <div className="flex h-1/4 bg-[#1C1816] md:h-full md:w-1/4  w-full items-center md:items-start p-5 lg:gap-10 justify-center">
        <div className="flex flex-1 flex-col items-start justify-center">
          <div className="">Sub Total</div>
          <div className="">Delivery Charges</div>
          <div className="">Discount</div>
          <div className="">Total</div>
        </div>
        <div className="flex flex-1 flex-col items-start justify-center">
          <div className="">100 $</div>
          <div className="">200 $</div>
          <div className="">100 $</div>
          <div className="">200 $</div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

//  {/* PRODUCTS CONTAINER */}
//  <div className="h-1/2 w-full bg-black flex flex-col justify-center items-center ">
//  {/* SINGLE ITEM */}
//  <div className="flex w-full items-center justify-between mb-4">
//    <Image src="/temporary/p1.png" alt="" width={100} height={100} />
//    <div className="">
//      <h1 className="uppercase text-xl font-bold">sicilian</h1>
//      <span>Large</span>
//    </div>
//    <h2 className="font-bold">$79.90</h2>
//    <span className="cursor-pointer">X</span>
//  </div>

// </div>
// {/* PAYMENT CONTAINER */}
// <div className="h-1/2 w-full flex flex-col justify-center items-center ">
//  <div className="flex justify-between">
//    <span className="">Subtotal (3 items)</span>
//    <span className="">$81.70</span>
//  </div>
//  <div className="flex justify-between">
//    <span className="">Service Cost</span>
//    <span className="">$0.00</span>
//  </div>
//  <div className="flex justify-between">
//    <span className="">Delivery Cost</span>
//    <span className="text-green-500">FREE!</span>
//  </div>
//  <hr className="my-2" />
//  <div className="flex justify-between">
//    <span className="">TOTAL(INCL. VAT)</span>
//    <span className="font-bold">$81.70</span>
//  </div>
//  <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
//    CHECKOUT
//  </button>
// </div>
