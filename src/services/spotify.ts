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

export async function getUserTopTracks(timeRange = "medium_term", offset = 0, limit = 5) {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        throw new Error("No access token found.");
    }
    
    const res = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=${limit}&offset=${offset}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      }
    })
    const data = await res.json();
    return data;
  }

  export async function getUserTopArtists(timeRange = "medium_term", offset = 0, limit = 5) {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        throw new Error("No access token found.");
    }
    
    const res = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=${limit}&offset=${offset}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      }
    })
    const data = await res.json();
    return data;
  }

  export async function getUserAlbums(offset = 0, limit = 5) {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        throw new Error("No access token found.");
    }

    const res = await fetch(`https://api.spotify.com/v1/me/albums?limit=${limit}&offset=${offset}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      }
    })
    const data = await res.json();
    return data;
  }

  export async function getAlbumPopularity(albumId = "") {
    const res = await fetch(`https://api.spotify.com/v1/albums/${albumId}`)
    const data = await res.json();
    return data;
  }