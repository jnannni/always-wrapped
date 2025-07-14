import { getAccessToken } from "./auth";

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

export async function isSpotifyTokenValid() {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        return false;
    }
    const res = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    });
    if (res.status === 401) {
        return false;
    }
    return true;
}