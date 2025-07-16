import { NextRequest, NextResponse } from 'next/server';
import { getAccessToken } from '@/shared/api/auth';
import { LastfmTrack, LastfmArtist, LastfmAlbum, LastfmTrackOriginal } from '@/shared/types/lastfm';
import { getUsernameFromSupabase } from '@/shared/api/supabase';

export async function GET(req: NextRequest) {
  try {
    const timeRanges = ["overall","7day", "1month", "3month", "6month", "12month"];
    const accessToken = await getAccessToken();
    const lastfmUsername = await getUsernameFromSupabase();
    const apiKey = process.env.LASTFM_KEY;

    if (!accessToken) {
      return NextResponse.json({ error: 'No access token' }, { status: 401 });
    }

    const timeRangedRequests = timeRanges.map(async(timeRange): Promise<[typeof timeRange, { artists: LastfmArtist[], tracks: LastfmTrack[], albums: LastfmAlbum[] }]> => {
      const queryParams = `period=${timeRange}&limit=5`;

      const [artistsResponse, tracksResponse, albumsResponse] = await Promise.all([
        fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${lastfmUsername}&api_key=${apiKey}&format=json&${queryParams}`, { next: { revalidate: 36000 } }),
        fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${lastfmUsername}&api_key=${apiKey}&format=json&${queryParams}`, { next: { revalidate: 36000 } }),
        fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${lastfmUsername}&api_key=${apiKey}&format=json&${queryParams}`, { next: { revalidate: 36000 } }),
      ]);

      
      if (!artistsResponse.ok || !tracksResponse.ok || !albumsResponse.ok) {
        console.error(`Failed to fetch time range ${timeRange}`);
        return [timeRange, {artists: [], tracks: [], albums: []}];
      }

      const [artistsData, tracksData, albumsData] = await Promise.all([
        artistsResponse.json(),
        tracksResponse.json(),
        albumsResponse.json()
      ]);

      const transformedTracks = transformTracks(tracksData.toptracks.track);

      return [timeRange, {artists: artistsData.topartists.artist, tracks: transformedTracks, albums: albumsData.topalbums.album}];
    })
    

    const userProfileResponse = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${lastfmUsername}&api_key=${apiKey}&format=json`, { next: { revalidate: 36000 } });

    const timeRangedData = await Promise.all(timeRangedRequests);

    if (!userProfileResponse.ok) {
      console.error("Failed to fetch user data");
      return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
    }

    const userProfile = await userProfileResponse.json();

    const topTracks: Record<string, LastfmTrack[]> = {};
    const topArtists: Record<string, LastfmArtist[]> = {};
    const topAlbums: Record<string, LastfmAlbum[]> = {};

    timeRangedData.forEach((res) => {
      const [timeRange, data] = res;
      topTracks[timeRange] = data.tracks;
      topArtists[timeRange] = data.artists;
      topAlbums[timeRange] = data.albums;
    });
    
    return NextResponse.json({
      topTracks,
      topArtists,
      topAlbums,
      userProfile,
      type: 'lastfm'
    });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function transformTrack(origTrack: LastfmTrackOriginal): LastfmTrack {
  const {artist, ...rest} = origTrack;
  return {
    ...rest,
    artists: [artist]
  }
}

function transformTracks(tracks: LastfmTrackOriginal[]): LastfmTrack[] {
  return tracks.map(transformTrack);
}