import Link from "next/link";
import CartIcon from "./CartIcon";
const user = false;
export const LinksRight: React.FC = () => {
return (
    <div className="flex flex-1 items-center justify-end gap-6">
    {!user ? (
      <Link href="/login">LOGIN</Link>
    ) : (
      <Link href="/orders">CART</Link>
    )}
    <CartIcon />
  </div>
);
};