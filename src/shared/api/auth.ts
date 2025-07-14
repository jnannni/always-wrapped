import { auth } from "@root/auth";
export async function getAccessToken() {
    const session = await auth();
    return session?.accessToken;
}

export async function getSupabaseAccessToken() {
    const session = await auth();
    return session?.supabaseAccessToken;
}

export async function getUserId() {
    const session = await auth();
    return session?.user?.id;
}