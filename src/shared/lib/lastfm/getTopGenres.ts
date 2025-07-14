type TopTag = {
    name: string;
}

export async function fetchGenres(tracks: string[], artists: string[]) {
    try {
    const requests = tracks.map(async (track, index) => {
      const artist = artists[index];

      if (typeof window !== 'undefined') {
        const response = await fetch(`/api/lastfm/get-tags?track=${track}&artist=${artist}`);
        if (!response.ok) return null;
        const data: TopTag[] = await response.json();
        return data;
      } else {
        const baseUrl = process.env.NEXTAUTH_URL || 'http://127.0.0.1:3000';
        const response = await fetch(`${baseUrl}/api/lastfm/get-tags?track=${track}&artist=${artist}`);
        if (!response.ok) return null;
        const data: TopTag[] = await response.json();        
        return data;
      }
    })
    const results = await Promise.all(requests);
    console.log(results);
    return results;
  } catch (err) {  
    console.log(err);  
    return null;
  }
}