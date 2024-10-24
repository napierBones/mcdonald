import Link from "next/link";

export const LinksLeft: React.FC = () => {
  return (
    <div className="flex flex-1 items-center justify-start gap-6">
      <Link href="/">HOME</Link>
      <Link href="/menu">MENU</Link>
      <Link href="/">CONTACTS</Link>
    </div>
  );
};
