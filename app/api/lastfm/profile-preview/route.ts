import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const {username} = await req.json();
    console.log("preview " + username);

    if (!username) {
        return NextResponse.json({error: "No username provided"}, {status: 400});
    }

    const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${username}&api_key=${process.env.LASTFM_KEY}&format=json`);

    if (!res.ok) {
        return NextResponse.json({error: "Failed to fetch lastfm profile"}, {status: 500});
    }
    const data = await res.json();
    return NextResponse.json(data.user);
}