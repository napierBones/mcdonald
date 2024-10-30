import { signIn } from '@/auth';
import React from 'react';

import { FaGoogle } from 'react-icons/fa';

export const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-[calc(100vh-120px)] items-center justify-center p-5">
      <form
        action={async () => {
          'use server';
          await signIn('google');
        }}
        className="flex w-full max-w-md flex-col items-start gap-6 border p-4 text-lg"
      >
        {/* Google Sign-In Button */}
        <button
          type="submit"
          className="mt-2 flex w-full items-center justify-center gap-2 bg-gray-100 p-3"
        >
          <FaGoogle /> Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
