"use client";
import {
  useLastfmTopTracks,
  useSpotifyTopTracks,
} from "@/shared/lib/hooks/useMusicData";
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
