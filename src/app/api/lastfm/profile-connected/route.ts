import {auth} from "@/auth";
import { getUsernameFromSupabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await auth();

    if (!session?.user?.id) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    const username = await getUsernameFromSupabase();

    if(!username) {
        return NextResponse.json({error: "No lastfm profile connected"}, {status: 400});
    }

    return NextResponse.json(username);
}