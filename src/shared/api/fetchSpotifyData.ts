// import { getAccessToken } from "./auth";
import { SpotifyResType } from "../types/spotify";

export async function fetchSpotifyData({
} = {}): Promise<SpotifyResType | null> {
    try {
        if (typeof window !== 'undefined') {
      const response = await fetch('/api/spotify/data');
      if (!response.ok) return null;
      const data = await response.json();
      console.log("data", data)
      return data;
    } else {
      const baseUrl = process.env.NEXTAUTH_URL || 'http://127.0.0.1:3000';
      const response = await fetch(`${baseUrl}/api/spotify/data`);
      if (!response.ok) return null;
      const data = await response.json();
      console.log("data", data)
      return data;
    }
    }
    catch(err) {
        console.error(err);
        return null;
    }
}