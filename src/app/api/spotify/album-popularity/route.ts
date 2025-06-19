import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const albumId = searchParams.get("albumId");
    
    const res = await fetch(`https://api.spotify.com/v1/albums/${albumId}`)
    const data = await res.json();
    return NextResponse.json(data);
}