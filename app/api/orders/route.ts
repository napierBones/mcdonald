import { auth } from '@/auth';
import prisma from '@/utils/utils';
import { NextResponse } from 'next/server';

// Fetch All orders
export const GET = async () => {
  const session = await auth();
  try {
    if (session?.user.isAdmin) {
      const orders = await prisma.order.findMany();
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    }
  
     if(session?.user) { const orders = await prisma.order.findMany({
        where: {
          userEmail: session.user.email!
        }
      });
      return new NextResponse(JSON.stringify(orders), { status: 200 });}

  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({
        message: 'Something went wrong in fetching all categories',
      }),
      { status: 500 }
    );
  }
};
