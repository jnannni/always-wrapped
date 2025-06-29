"use client";
import { useDataProvider } from "./useDataProvider";
import { fetchSpotifyData } from "../api/fetchSpotifyData";
export const useSpotifyProvider = () => {
  return useDataProvider(fetchSpotifyData, "spotify");
};
