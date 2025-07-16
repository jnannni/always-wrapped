import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const {searchParams} = new URL(req.url);
    const artist = searchParams.get("artist");
    const track = searchParams.get("track");
    const apiKey = process.env.LASTFM_KEY;

    if (!artist || !track) {
        return NextResponse.json({error: "No artist or track provided"}, {status: 400});
    }

    if (!apiKey) {
        return NextResponse.json({error: "No API key provided"}, {status: 400});
    }

    try {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=${artist}&track=${track}&format=json`, {next: {revalidate: 36000}});

        if (!response.ok) {
            return NextResponse.json({ error: "Last.fm API request failed" }, { status: response.status });
        }

        const data = await response.json();
        const tags = data.track.toptags.tag || [];
        return NextResponse.json(tags);
    } catch (err) {
        console.error(err);
        return NextResponse.json({error: "Failed to fetch tags"}, {status: 500});
    }
}