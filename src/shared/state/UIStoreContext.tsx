"use client";
import { createContext, useEffect, useState } from "react";
import { useSpotifyProvider } from "./useSpotifyProvider";
import { SpotifyResType } from "../types/spotify";

type UIStoreContextType = {
  items: SpotifyResType | null;
  pending: boolean;
  error: Error | null;
  toggle: "spotify" | "lastfm";
  onToggle: () => void;
};

type ViewToggle = "spotify" | "lastfm";

export const UIStoreContext = createContext<UIStoreContextType | null>(null);

export const UIStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const spotifyData = useSpotifyProvider();
  const lastfmData = useSpotifyProvider();

  useEffect(() => {
    spotifyData.fetch();
  }, [spotifyData]);

  const [toggle, setToggle] = useState<ViewToggle>("spotify");
  const dataMap = {
    ["spotify"]: spotifyData,
    ["lastfm"]: lastfmData,
  };

  const currentData = dataMap[toggle];

  function handleToggle() {
    setToggle((prev) => (prev === "spotify" ? "lastfm" : "spotify"));
  }
  return (
    <UIStoreContext.Provider
      value={{
        items: currentData.items,
        pending: currentData.pending,
        error: currentData.error,
        toggle,
        onToggle: handleToggle,
      }}
    >
      {children}
    </UIStoreContext.Provider>
  );
};
