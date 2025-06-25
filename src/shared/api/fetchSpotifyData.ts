import { getAccessToken } from "./auth";
import { SpotifyResType, SpotifyArtist, SpotifyTrack, SpotifyUserAlbums } from "../types/spotify";

export async function fetchSpotifyData({
    timeRange = "medium_term",
    offset = 0,
    limit = 5
} = {}): Promise<SpotifyResType | null> {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        return null;
    }
    const queryParams = `?time_range=medium_term&limit=5&offset=0`

    const endpoints = {
        topArtists: `https://api.spotify.com/v1/me/top/artists${queryParams}`,
        topTracks: `https://api.spotify.com/v1/me/top/tracks${queryParams}`,
        userAlbums: `https://api.spotify.com/v1/me/albums${queryParams}`,
    }
    
    const requests = Object.entries(endpoints).map(async ([key, url]) => {
        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })

        if (!res.ok) {
            console.error("Failed to fetch " + key);
            return [key, null];
        }

        const data = await res.json();
        return [key, data.items];
    })

    const responses = await Promise.all(requests); // fix this

     const {topTracks, topArtists, userAlbums} = Object.fromEntries(responses);
    return {
        topTracks,
        topArtists,
        userAlbums
    }
}