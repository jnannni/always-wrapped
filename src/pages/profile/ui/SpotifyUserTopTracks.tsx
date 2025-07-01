"use client";
import TracksChart from "./TracksChart";
import useUIStoreContext from "@/shared/state/useUIStoreContext";

export default function SpotifyUserTopTracks() {
  const { items } = useUIStoreContext();
  if (!items) {
    return <div>Loading tracks...</div>;
  }

  return <TracksChart tracks={items.topTracks} />;
}
