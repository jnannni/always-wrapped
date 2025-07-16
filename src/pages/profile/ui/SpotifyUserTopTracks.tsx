"use client";
import { useLastfmTopTracks } from "@/shared/lib/hooks/useLastfmData";
import { useSpotifyTopTracks } from "@/shared/lib/hooks/useSpotifyData";
import TracksChart from "./TracksChart";
import useUIStoreContext from "@/shared/state/useUIStoreContext";

export default function SpotifyUserTopTracks() {
  const { items, toggle } = useUIStoreContext();
  const spotifyTracks = useSpotifyTopTracks("short_term");
  const lastfmTracks = useLastfmTopTracks("7day");
  const currentTracks = toggle === "spotify" ? spotifyTracks : lastfmTracks;

  if (!items) {
    return <div>Loading tracks...</div>;
  }

  return <TracksChart tracks={currentTracks} />;
}
