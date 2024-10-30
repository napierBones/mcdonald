'use client';
import { useCartStore } from '@/utils/store';
import Image from 'next/image';
import React from 'react';

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  return (
    <div className="flex h-[calc(100vh-120px)] w-full flex-col items-start justify-evenly bg-black text-white md:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="flex h-1/2 w-full flex-col items-center justify-center bg-black">
        {/* SINGLE ITEM */}
 {  products.map((item,index)=>(
   <div key={index} className="mb-4 flex w-full items-center justify-between">
  {item.img && <Image src={item.img} alt="" width={100} height={100} />}
   <div className="">
     <h1 className="text-xl font-bold uppercase">{item.title} x {item.quantity}</h1>
     <span>{item.optionTitle}</span>
   </div>
   <h2 className="font-bold">{item.price}</h2>
   <span className="cursor-pointer" onClick={()=>removeFromCart(item)}>X</span>
 </div>
 ))    }
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="flex h-1/2 w-full flex-col items-center justify-center">
        <div className="flex justify-between">
          <span className="">Subtotal ({totalItems} items)</span>
          <span className="">{totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">{totalPrice}</span>
        </div>
        <button className="w-1/2 self-end rounded-md bg-red-500 p-3 text-white">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
