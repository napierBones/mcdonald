import React from 'react';
import Wrapper from './Wrapper';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';

const Footer = () => {
  return (
    <Wrapper className="flex flex-wrap h-16 items-center bg-black justify-center text-yellow-400">
      <Link href="/" className="relative h-10 w-20">
        <Image alt="logo" className="object-contain" fill src={logo} />
      </Link>
      <span>© ALL RIGHTS RESERVED.</span>
    </Wrapper>
  );
};

export default Footer;
