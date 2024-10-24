import Image from 'next/image';
import React from 'react';
import Wrapper from './Wrapper';

const Notification = () => {
  return (
    <Wrapper className="min-h-10 flex flex-wrap cursor-pointer items-center justify-center gap-5 bg-black py-2 text-center text-xs sm:text-sm text-white ">
      Free delivery for all orders over $50. Order your food now!
      <span className="flex cursor-pointer items-center gap-2 px-1">
        <Image src="/phone.png" alt="" width={20} height={20} />
        <span>123 456 789</span>
      </span>
    </Wrapper>
  );
};

export default Notification;
