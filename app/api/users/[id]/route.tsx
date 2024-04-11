import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: number;
  };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({
    id: 1,
    name: "Gabriele",
  });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name required" }, { status: 400 });
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 3, name: "Gabriele" });
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ status: "deleted" }, { status: 200 });
}
