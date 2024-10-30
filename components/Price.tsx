'use client';

import { ProductType } from '@/types';
import { useCartStore } from '@/utils/store';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0); // Start from index 0

  const { addtoCart } = useCartStore();

  useEffect(() => {
    if (product.options && product.options.length > 0) {
      setTotal(
        quantity * product.price + product.options[selected].additionalPrice
      );
    } else {
      setTotal(quantity * product.price);
    }
  }, [quantity, selected, product]);

 const handleCart = () => {

    addtoCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: total,
      ...(product.options?.length && {
        optionTitle: product.options[selected].title,
      }),
      quantity: quantity,
    })
    toast.success('Product added to cart');
 }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {product.options &&
          product.options.map((option, index) => (
            <button
              key={option.title}
              className="min-w-[6rem] p-2 ring-1 ring-yellow-400"
              style={{
                background: selected === index ? 'rgb(250 204 21)' : 'black',
                color: selected === index ? 'white' : 'rgb(250 204 21)',
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex items-center justify-between">
        {/* QUANTITY */}
        <div className="flex w-full justify-between p-3 ring-1 ring-yellow-400">
          <span>Quantity</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
            >
              {'<'}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity(prev => (prev < 9 ? prev + 1 : 9))}
            >
              {'>'}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button
          onClick={handleCart}
          className="w-56 bg-yellow-400 p-3 uppercase text-white ring-1 ring-yellow-400"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
