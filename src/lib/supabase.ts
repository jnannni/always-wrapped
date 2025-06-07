import { getSupabaseAccessToken } from "./auth";
import {createClient} from "@supabase/supabase-js";
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