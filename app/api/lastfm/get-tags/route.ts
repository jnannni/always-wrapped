import { NextRequest, NextResponse } from "next/server";

type TopTag = {
    name: string;
}

export async function GET(req: NextRequest): Promise<NextResponse<TopTag[]>> {
    const {searchParams} = new URL(req.url);
    const artist = searchParams.get("artist");
    const track = searchParams.get("track");
    const apiKey = process.env.LASTFM_KEY;

    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=${artist}&track=${track}&format=json`);
    const data = await response.json();
    return NextResponse.json(data.toptags);
}