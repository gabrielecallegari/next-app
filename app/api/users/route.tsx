import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  const email = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  })

  if(email) return NextResponse.json({error: 'User already exist'},{status: 400})
  
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  })
  return NextResponse.json(user, {status: 200});
}
