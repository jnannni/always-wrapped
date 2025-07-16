import { NextRequest, NextResponse } from 'next/server';
import { getAccessToken } from '@/shared/api/auth';
import { SpotifyArtist, SpotifyTrack } from '@/shared/types/spotify';

export async function GET(req: NextRequest) {
  try {
    const timeRanges = ["short_term", "medium_term", "long_term"];
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return NextResponse.json({ error: 'No access token' }, { status: 401 });
    }

    const timeRangedRequests = timeRanges.map(async(timeRange): Promise<[typeof timeRange, { artists: SpotifyArtist[], tracks: SpotifyTrack[] }]> => {
      const queryParams = `?time_range=${timeRange}&limit=5&offset=0`;

      const [artistsResponse, tracksResponse] = await Promise.all([
        fetch(`https://api.spotify.com/v1/me/top/artists${queryParams}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          next: { revalidate: 36000 }
        }),
        fetch(`https://api.spotify.com/v1/me/top/tracks${queryParams}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          next: { revalidate: 36000 }
        })
      ]);

      if (!artistsResponse.ok || !tracksResponse.ok) {
        console.error(`Failed to fetch time range ${timeRange}`);
        return [timeRange, {artists: [], tracks: []}];
      }

      const [artistsData, tracksData] = await Promise.all([
        artistsResponse.json(),
        tracksResponse.json()
      ]);

      return [timeRange, {artists: artistsData.items, tracks: tracksData.items}];
    })

    const [userProfileResponse, userAlbumsResponse] = await Promise.all([
      fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
          next: { revalidate: 36000 }
      }),
      fetch("https://api.spotify.com/v1/me/albums", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
          next: { revalidate: 36000 }
      })
    ]);

    const timeRangedData = await Promise.all(timeRangedRequests);

    if (!userProfileResponse.ok || !userAlbumsResponse.ok) {
      console.error("Failed to fetch user data");
      return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
    }

    const userProfile = await userProfileResponse.json();
    const userAlbums = await userAlbumsResponse.json();

    const topTracks: Record<string, SpotifyTrack[]> = {};
    const topArtists: Record<string, SpotifyArtist[]> = {};

    timeRangedData.forEach((res) => {
      const [timeRange, data] = res;
      topTracks[timeRange] = data.tracks;
      topArtists[timeRange] = data.artists;
    });
    
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