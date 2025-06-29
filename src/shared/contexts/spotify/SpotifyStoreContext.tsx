"use client";

import { createContext, useState } from "react";
import { SpotifyContextType } from "./spotifyStore";
import { SpotifyResType } from "@/shared/types/spotify";

const defaultValue = {
  userProfile: {
    country: "",
    display_name: "",
    id: "",
    images: [],
  },
  topTracks: [],
  topArtists: [],
  userAlbums: [],
  type: "spotify" as const,
};

export const SpotifyStoreContext = createContext<SpotifyContextType>({
  spotifyStore: defaultValue,
  addSpotifyData: () => {},
});

export const SpotifyStoreProvider = ({
  initialData = defaultValue,
  children,
}: {
  initialData: SpotifyResType;
  children: React.ReactNode;
}) => {
  const [spotifyStore, setSpotifyStore] = useState<SpotifyResType>(initialData);
  const addSpotifyData = (data: SpotifyResType) => {
    setSpotifyStore(data);
  };

  return (
    <SpotifyStoreContext.Provider value={{ spotifyStore, addSpotifyData }}>
      {children}
    </SpotifyStoreContext.Provider>
  );
};

export const LastfmStoreProvider = ({
  initialData = defaultValue,
  children,
}: {
  initialData: SpotifyResType;
  children: React.ReactNode;
}) => {
  const [spotifyStore, setSpotifyStore] = useState<SpotifyResType>(initialData);
  const addSpotifyData = (data: SpotifyResType) => {
    setSpotifyStore(data);
  };

  return (
    <SpotifyStoreContext.Provider value={{ spotifyStore, addSpotifyData }}>
      {children}
    </SpotifyStoreContext.Provider>
  );
};
