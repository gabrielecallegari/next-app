import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Gabriele" },
    { id: 2, name: "Luca" },
    { id: 3, name: "Roberto" },
  ]);
}

export async function POST(request: NextRequest){
    const body = await request.json()
    if(!body.name) return NextResponse.json({error: 'Name is required'}, {status: 400})
    return NextResponse.json(body)
}