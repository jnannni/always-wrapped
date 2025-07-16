import { SpotifyAlbum } from "@/shared/types/spotify";

export async function getAlbumsPopularity(ids: string[]) {
    try {
    const requests = ids.map(async (id, index) => {
    if (typeof window !== 'undefined') {
        const response = await fetch(`/api/spotify/get-albums-popularity?id=${id}`);
        if (!response.ok) return null;
        const data: SpotifyAlbum = await response.json();
        return data;
      } else {
        const baseUrl = process.env.NEXTAUTH_URL || 'http://127.0.0.1:3000';
        const response = await fetch(`${baseUrl}/api/spotify/get-albums-popularity?id=${id}`);
        if (!response.ok) return null;
        const data: SpotifyAlbum = await response.json();        
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