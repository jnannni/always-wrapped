import { getSupabaseAccessToken } from "./auth";
import {createClient} from "@supabase/supabase-js";
import { getUserId } from "./auth";
import { NextResponse } from "next/server";
export async function getSupabaseClient() {
    const supabaseAccessToken = await getSupabaseAccessToken();
 
    const supabase = createClient(
    process.env.SUPABASE_URL ?? '',
    process.env.SUPABASE_KEY ?? '',
    {
        global: {
            headers: {
                Authorization: `Bearer ${supabaseAccessToken}`,
            },
        },
    }
    )
    return supabase;
}

export async function insertLastfmProfiles(username: string) {
    const supabase = await getSupabaseClient();
    const { data, error } = await supabase.from("lastfm_profiles").insert({username});

    if (error) {
        console.log(error);
    }

    if (data) {
        console.log(data);
    }
}

export async function getUsernameFromSupabase() {
    const userId = await getUserId();
    const supabase = await getSupabaseClient();
    const {data, error} = await supabase.from("lastfm_profiles").select("username").eq("userId", userId).single();

    if(error || !data) {
        return NextResponse.json({error: "Failed to fetch lastfm profile"}, {status: 500});
    }
    return data;
}