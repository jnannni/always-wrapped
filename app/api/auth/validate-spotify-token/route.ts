import { NextResponse, NextRequest } from "next/server";
import {isSpotifyTokenValid} from "@/shared/api/spotify";

export async function GET(req: NextRequest) {
    try {
        const isValid = await isSpotifyTokenValid();
        return NextResponse.json({isValid});
    } catch(err) {
        console.error(err);
        return NextResponse.json({isValid: false});
    }
}