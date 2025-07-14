import jwt from "jsonwebtoken";
import {createClient} from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
    process.env.SUPABASE_URL ?? '',
    process.env.SUPABASE_KEY ?? '',
)

export async function POST(req: NextRequest) {
    const authorization = req.headers.get("Authorization");
    if (!authorization || !authorization.startsWith("Bearer ")) {
        return new Response("Unauthorized", {status: 401});
    }

    const token = authorization.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.SUPABASE_JWT_SECRET ?? "");
        const body = await req.json();

        const {data, error} = await supabase
        .from("lastfm_profiles")
        .insert([
            {
                username: body.username,
                userId: decoded.sub,
            },
        ]);

        if (error) {
            console.error("Error inserting data:", error);
            return new Response("Unauthorized", {status: 401});
        }

        if (data) {
            console.log("Inserted " + data);
        }

        return NextResponse.json({ data: "Success" });
    } catch (error) {
        console.error("Error authenticating user:", error);
        return new Response("Unauthorized", {status: 401});
    }
}