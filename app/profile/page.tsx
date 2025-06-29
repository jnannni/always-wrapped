import SpotifyView from "@/pages/profile/spotify-view/SpotifyView";
import { fetchSpotifyData } from "@/shared/api/fetchSpotifyData";
import { SpotifyStoreProvider } from "@/shared/contexts/spotify/SpotifyStoreContext";
import { getUsernameFromSupabase } from "@/shared/api/supabase";
import { getSpotifyProfile } from "@/shared/api/spotify";
import { SpotifyResType } from "@/shared/types/spotify";
export default async function Profile() {
  const username = await getUsernameFromSupabase();
  if (username) {
    // if lastfm is connected, fetch lastfm data
  }

  // fetch spotify data + profile
  const [spotifyProfile, spotifyData] = await Promise.all([
    getSpotifyProfile(),
    fetchSpotifyData(),
  ]);

  const data: SpotifyResType = {
    userProfile: spotifyProfile,
    topTracks: spotifyData?.topTracks || [],
    topArtists: spotifyData?.topArtists || [],
    userAlbums: spotifyData?.userAlbums || [],
    type: "spotify",
  };

  if (!spotifyData && !spotifyProfile) {
    return (
      <div>
        <p>Something went wrong</p>
      </div>
    );
  }

  return (
    <SpotifyStoreProvider initialData={data}>
      <SpotifyView />
    </SpotifyStoreProvider>
  );
}
