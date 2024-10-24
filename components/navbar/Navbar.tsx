import React from 'react';
import Wrapper from '../Wrapper';
import { LinksLeft } from './LinksLeft';
import { Logo } from './Logo';
import { LinksRight } from './LinksRight';
const Navbar = () => {
  return (
    <Wrapper className="flex h-20  bg-black items-center justify-between py-2 text-yellow-400 text-xl">
      {/* LEFT LINKS */}
      <LinksLeft />
      {/* LOGO */}
      <Logo />

      {/* RIGHT LINKS */}

      <LinksRight />
    </Wrapper>
  );
};

export default Navbar;
