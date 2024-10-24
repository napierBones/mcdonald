'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartIcon from './navbar/CartIcon';

const links = [
  { id: 1, title: 'Homepage', url: '/' },
  { id: 2, title: 'Menu', url: '/menu' },
  { id: 3, title: 'Working Hours', url: '/' },
  { id: 4, title: 'Contact', url: '/' },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const user = false;
  return (
    <div>
      {/* LONG WAY */}
      {/* {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )} */}

      {/* SHORTCUT */}
      <Image
        src={open ? '/close.png' : '/open.png'}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open && (
        <div className="absolute left-0 top-24 z-10 flex h-[calc(100vh-6rem)] w-full flex-col items-center justify-center gap-8 bg-red-500 text-3xl text-white">
          {links.map(item => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}

          {/* LONG WAY */}
          {/* {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )} */}

          {/* SHORTCUT */}
          <Link
            href={user ? '/orders' : 'login'}
            onClick={() => setOpen(false)}
          >
            {user ? 'Orders' : 'Login'}
          </Link>
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
