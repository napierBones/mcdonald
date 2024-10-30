import Link from "next/link";
import CartIcon from "./CartIcon";
import { auth, signOut } from "@/auth";
export const LinksRight: React.FC = async () => {
  const session = await auth()
  console.log('session:', session)
return (
    <div className="flex flex-1 items-center justify-end gap-6">
    {!session?.user ? (
      <Link href="/login">LOGIN</Link>
    ) : (
      <>
      <form
      action={async () => {
        "use server"
        await signOut()
      }}
      >
      <button type="submit">Sign Out</button>
    </form>
      <Link href="/orders">Orders</Link>
      </>
    )}
    <CartIcon />
   
  </div>
);
};