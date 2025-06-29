import { NextRequest, NextResponse } from 'next/server';
import { getAccessToken } from '@/shared/api/auth';

export async function GET(req: NextRequest) {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return NextResponse.json({ error: 'No access token' }, { status: 401 });
    }

    const queryParams = `?time_range=medium_term&limit=5&offset=0`;
    
    const endpoints = {
      topArtists: `https://api.spotify.com/v1/me/top/artists${queryParams}`,
      topTracks: `https://api.spotify.com/v1/me/top/tracks${queryParams}`,
      userAlbums: `https://api.spotify.com/v1/me/albums${queryParams}`,
    };
    
    const requests = Object.entries(endpoints).map(async ([key, url]) => {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      });

      if (!response.ok) {
        console.error("Failed to fetch " + key);
        return [key, null];
      }

      const data = await response.json();
      return [key, data.items];
    });

    requests.push(
      fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      }).then(res => res.json()).then(data => ['userProfile', data])
    );

    const responses = await Promise.all(requests);
    const { topTracks, topArtists, userAlbums, userProfile } = Object.fromEntries(responses);
    
    return NextResponse.json({
      topTracks,
      topArtists,
      userAlbums,
      userProfile,
      type: 'spotify'
    });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}