import { useContext } from "react";
import { SpotifyStoreContext } from "./SpotifyStoreContext";

export default function useSpotifyStoreContext() {
  return useContext(SpotifyStoreContext);
}
