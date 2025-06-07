import { auth} from "@/auth";
export async function getAccessToken() {
    const session = await auth();
    return session?.accessToken;
}

export async function getSupabaseAccessToken() {
    const session = await auth();
    return session?.supabaseAccessToken;
}