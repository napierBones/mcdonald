import Image from "next/image";
import Link from "next/link";
import logo from '@/public/logo.png';
export const Logo: React.FC = () => {
  return (
    <div className="relative flex flex-1 items-center justify-center">
      <Link href="/" className="relative h-10 w-full ">
        <Image alt="logo" className="object-contain bg-black" fill src={logo} />
      </Link>
    </div>
  );
};
