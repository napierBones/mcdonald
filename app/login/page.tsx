import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex h-[calc(100vh-1px)] items-center justify-center p-1">
      {/* BOX */}
      <div className="flex h-full w-full flex-col p-5 md:h-3/4 md:w-3/4 md:flex-row">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/2 w-full md:h-full md:w-1/2">
          <Image src="/asset 17.png" alt="" fill className="" />
        </div>
        {/* FORM CONTAINER */}
        <div className="flex h-1/2 w-full flex-col items-start justify-evenly p-5 md:h-full md:w-1/2">
          <h1 className="text-xl font-bold xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex w-72 gap-2 p-4 ring-1 ring-orange-100">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex w-72 gap-2 p-4 ring-1 ring-blue-100">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?
            <Link className="underline" href="/">
              {' '}
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
