import SpotifyView from "../../src/pages/profile/views/SpotifyView";
import { fetchSpotifyData } from "@/shared/api/fetchSpotifyData";
import { SpotifyStoreProvider } from "@/shared/contexts/spotify/SpotifyStoreContext";
export default async function Profile() {
  // fetch all spotify data
  // if lastfm is connected, fetch lastfm data
  const data = await fetchSpotifyData();

  if (!data) {
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
