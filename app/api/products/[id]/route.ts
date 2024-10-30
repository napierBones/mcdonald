import prisma from '@/utils/utils'; 
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  // Await the params before accessing it
  const { id } = await params; 
  console.log(id);

  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong' }), { status: 500 });
  }
};
