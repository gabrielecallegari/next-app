import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const products = await prisma.products.findMany()
  return NextResponse.json(products);
}

export async function POST(request: NextRequest){
    const body = await request.json()
    if(!body.name) return NextResponse.json({error: 'Name is required'},{status: 400})
    if(!body.price) return NextResponse.json({error: 'Price is required'},{status: 400})
    const insert = await prisma.products.create({
      data: {
        name: body.name,
        price: body.price
      }
    })
    return NextResponse.json(insert,{status: 200})
}
