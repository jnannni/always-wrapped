import SpotifyView from "../ui/views/SpotifyView";
import { fetchSpotifyData } from "@/utils/fetchSpotifyData";
export default async function Profile() {
  // fetch all spotify data
  // if lastfm is connected, fetch lastfm data
  const spotifyData = await fetchSpotifyData();

  return (
    <>
      <SpotifyView />
    </>
  );
}
