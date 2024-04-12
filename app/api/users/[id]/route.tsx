import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name required" }, { status: 400 });
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id)
    }
  })

  if (!user) return NextResponse.json({ error: "User doesn't exsist" }, { status: 400 });

  const update = await prisma.user.update({
    where: {
      id: user.id
    },
    data: {
      name: body.name,
      email: body.email
    }
  })
  return NextResponse.json(update, {status: 200});
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id)
    }
  })

  if(!user) return NextResponse.json({ error: "User doesn't exsist" }, { status: 400 });

  await prisma.user.delete({
    where: {
      id: user.id
    }
  })
  return NextResponse.json({ status: "deleted" }, { status: 200 });
}
