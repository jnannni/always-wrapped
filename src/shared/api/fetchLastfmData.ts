import { LastfmResType } from "../types/lastfm";

export async function fetchLastfmData(): Promise<LastfmResType | null> {
    try {
        if (typeof window !== 'undefined') {
          const response = await fetch('/api/lastfm/data');
          if (!response.ok) return null;
          const data = await response.json();
          console.log("lastfm data client", data)
          return data;
    } else {
      const baseUrl = process.env.NEXTAUTH_URL || 'http://127.0.0.1:3000';
      const response = await fetch(`${baseUrl}/api/lastfm/data`);
      if (!response.ok) return null;
      const data = await response.json();
      console.log("lastfm data server", data)
      return data;
    }
    }
    catch(err) {
        console.error(err);
        return null;
    }
}