import { getAccessToken } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const accessToken = await getAccessToken();

    if (!accessToken) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    const { searchParams } = new URL(req.url);
    const timeRange = searchParams.get("timeRange") || "medium_term";
    const offset = searchParams.get("offset") || 0;
    const limit = searchParams.get("limit") || 5;

    const res = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=${limit}&offset=${offset}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      }
    })
    const data = await res.json();
    return NextResponse.json(data);

}