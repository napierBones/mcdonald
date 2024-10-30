
import prisma from '@/utils/utils';
import { NextResponse } from 'next/server';
// Fetch All Categories
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
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
