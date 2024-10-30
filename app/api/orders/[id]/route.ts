import prisma from "@/utils/utils"
import { NextRequest, NextResponse } from "next/server"

export const PUT = async (req:NextRequest,{params}:{params:{id:string}}) => {
    const {id} =await params
try {
    const body=await req.json()
    await prisma.order.update({
        where:{
            id
        },
        data:{
            status:body
        }
    })
    return new NextResponse(JSON.stringify({message:'order status is updated '}), { status: 200 })
 } catch (error) {
console.log(error)
 return new NextResponse(JSON.stringify({message:'Something went wrong in '}), { status: 500 })
}
}