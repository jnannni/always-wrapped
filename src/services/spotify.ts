import { getAccessToken } from "@/lib/auth";

export async function getSpotifyProfile() {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        throw new Error("No access token found.");
    }

    const res = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    });
    const data = await res.json();
    return data;
}