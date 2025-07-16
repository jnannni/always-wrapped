import { LastfmTrack } from "@/shared/types/lastfm";

type TopTag = {
    name: string;
}

export async function fetchGenres(tracks: LastfmTrack[]) {
    try {
    const requests = tracks.map(async (track) => {
      const artist = track.artists[0].name;

      if (typeof window !== 'undefined') {
        const response = await fetch(`/api/lastfm/get-tags?track=${encodeURIComponent(track.name)}&artist=${encodeURIComponent(artist)}`);
        if (!response.ok) return null;
        const data: TopTag[] = await response.json();
        return data;
      } else {
        const baseUrl = process.env.NEXTAUTH_URL || 'http://127.0.0.1:3000';
        const response = await fetch(`${baseUrl}/api/lastfm/get-tags?track=${encodeURIComponent(track.name)}&artist=${encodeURIComponent(artist)}`);
        if (!response.ok) return null;
        const data: TopTag[] = await response.json();        
        return data;
      }
    })
    const results = await Promise.all(requests);
    // console.log(results);
    return results;
  } catch (err) {  
    console.log(err);  
    return null;
  }
}