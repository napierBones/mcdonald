import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-120px)] items-start md:items-center justify-center p-1">
      {/* BOX */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 ">
        {/* IMAGE CONTAINER */}
        <div className="">
          <Image src="/asset 17.png" alt="" width={500} height={500} className="" />
        </div>
        {/* FORM CONTAINER */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex w-72 gap-2 p-4 ring-1 ring-orange-100">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className=""
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
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
