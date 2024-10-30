
import { CategoryType } from '@/types';
import Link from 'next/link';
import React from 'react';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch Categories form db');
  }
  return res.json();
};

const MenuPage = async () => {
  const category:CategoryType[] = await getData();
  return (
    <div className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center p-4 md:flex-row lg:px-20 xl:px-40">
      {category.map(category => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="min-h-[33%] w-full bg-cover p-8 md:min-h-[50%]"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div
            className={`text-${category.color} flex max-w-[50%] flex-col items-start justify-start gap-3`}
          >
            <h1 className="text-3xl font-bold uppercase">{category.title}</h1>
            <p className="text-sm">{category.desc}</p>
            <button className={`bg-black px-4 py-2 text-white`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
