import { getAccessToken } from "@/lib/auth";

export async function fetchSpotifyData() {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        return console.error("No access token found.");
    }
    const routeNames = [
        "user-top-tracks",
        "user-top-artists",
        "user-albums"];
    
    const requests = routeNames.map((routeName) => fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify/${routeName}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    }))

    const responses = await Promise.all(requests); // fix this
    console.log(responses);

    const [topTracks, topArtists, userAlbums] = responses;
    return {
        topTracks,
        topArtists,
        userAlbums
    }
}