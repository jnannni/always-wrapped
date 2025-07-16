import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "@/shared/api/auth";
import { SpotifyAlbum } from "@/shared/types/spotify";

export async function GET(req: NextRequest) {
    const accessToken = await getAccessToken();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!accessToken) {
        return NextResponse.json({ error: 'No access token' }, { status: 401 });
    }

    try {
        const res = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            next: { revalidate: 36000 }
        });
        const data: SpotifyAlbum = await res.json();
        return NextResponse.json(data);
    } catch(err) {
        console.error(err);
        return NextResponse.json({error: "Failed to fetch albums"}, {status: 500});
    }
}