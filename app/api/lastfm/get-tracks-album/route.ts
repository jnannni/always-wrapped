import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const {searchParams} = new URL(req.url);
    const track = searchParams.get("track");
    const artist = searchParams.get("artist");
    const apiKey = process.env.LASTFM_KEY;

    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=${artist}&track=${track}&format=json`);
    const data = await response.json();
    const albumName = "album" in data.track ? data.track.album.title : data.track.name;
    return NextResponse.json({albumName});    
}