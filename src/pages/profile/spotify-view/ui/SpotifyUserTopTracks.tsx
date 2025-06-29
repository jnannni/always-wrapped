"use client";
import TracksChart from "../../ui/TracksChart";
// import useSpotifyStoreContext from "@/shared/contexts/spotify/useSpotifyStoreContext";
import useUIStoreContext from "@/shared/state/useUIStoreContext";

export default function SpotifyUserTopTracks() {
  // const { spotifyStore } = useSpotifyStoreContext();
  // const { topTracks } = spotifyStore;
  const { items } = useUIStoreContext();

  return <TracksChart tracks={items?.topTracks || []} />;
}
