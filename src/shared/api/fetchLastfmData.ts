import { LastfmResType } from "../types/lastfm";

export async function fetchLastfmData(): Promise<LastfmResType | null> {
    try {
        if (typeof window !== 'undefined') {
          const response = await fetch('/api/lastfm/data');
          if (!response.ok) return null;
          const data = await response.json();
          return data;
    } else {
      const baseUrl = process.env.NEXTAUTH_URL || 'http://127.0.0.1:3000';
      const response = await fetch(`${baseUrl}/api/lastfm/data`);
      if (!response.ok) return null;
      const data = await response.json();
      return data;
    }
    }
    catch(err) {
        console.error(err);
        return null;
    }
}

export async function fetchLastfmTrackAlbum(tracks: string[], artists: string[]) {
  try {
    const requests = tracks.map(async (origTrack, index) => {
      const artist = encodeURIComponent(artists[index]);
      const track = encodeURIComponent(origTrack);

      if (typeof window !== 'undefined') {
        const response = await fetch(`/api/lastfm/get-tracks-album?track=${track}&artist=${artist}`);
        if (!response.ok) return null;
        const data = await response.json();
        return data.albumName;
      } else {
        const baseUrl = process.env.NEXTAUTH_URL || 'http://127.0.0.1:3000';
        const response = await fetch(`${baseUrl}/api/lastfm/get-tracks-album?track=${track}&artist=${artist}`);
        if (!response.ok) return null;
        const data = await response.json();        
        return data.albumName;
      }
    })
    const results = await Promise.all(requests);
    console.log(results);
    return results;
  } catch (err) {    
    return null;
  }
}