"use client";
import { createContext, useEffect, useRef, useState, useMemo } from "react";
import { useSpotifyProvider } from "./useSpotifyProvider";
import { SpotifyResType } from "../types/spotify";
import { useAuth } from "../lib/hooks/useAuth";
import { LastfmResType } from "../types/lastfm";
import { useLastfmProvider } from "./useLastfmProvider";

type UIStoreContextType = {
  items: SpotifyResType | LastfmResType | null;
  userProfile: SpotifyResType["userProfile"];
  pending: boolean;
  fetched: boolean;
  error: Error | null;
  toggle: "spotify" | "lastfm";
  onToggle: () => void;
  onTimeChange: (timeRange: string) => void;
};

type ViewToggle = "spotify" | "lastfm";

export const UIStoreContext = createContext<UIStoreContextType | null>(null);

export const UIStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const AVAILABLE_TIME_RANGES = {
    spotify: ["short_term", "medium_term", "long_term"],
    lastfm: ["overall", "7day", "1month", "3month", "6month", "12month"],
  };
  const spotifyData = useSpotifyProvider();
  const lastfmData = useLastfmProvider();
  const { accessToken } = useAuth();
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (accessToken && !hasFetchedRef.current) {
      spotifyData.fetch();
      lastfmData.fetch();
      hasFetchedRef.current = true;
    }
  }, [accessToken]);

  const [toggle, setToggle] = useState<ViewToggle>("spotify");
  const [timeRanges, setTimeRanges] = useState({
    spotify: "medium_term",
    lastfm: "7day",
  });

  const dataMap = useMemo(() => {
    return {
      ["spotify"]: spotifyData,
      ["lastfm"]: lastfmData,
    };
  }, [spotifyData, lastfmData]);

  const currentData = dataMap[toggle];
  const profile = useMemo(() => {
    return spotifyData.items
      ? spotifyData.items.userProfile
      : {
          country: "Country Unknown",
          display_name: "Your name could've been here",
          id: "id",
          images: [
            {
              url: "https://placehold.co/600x400",
              height: "600",
              width: "400",
            },
          ],
        };
  }, [spotifyData.items]);

  const handleToggle = () => {
    setToggle((prev) => (prev === "spotify" ? "lastfm" : "spotify"));
  };

  const handleTimeRangeChange = (range: string) => {
    setTimeRanges((prev) => ({ ...prev, [toggle]: range }));
  };

  return (
    <UIStoreContext.Provider
      value={{
        items: currentData.items,
        userProfile: profile,
        pending: currentData.pending,
        fetched: currentData.fetched,
        error: currentData.error,
        toggle,
        onToggle: handleToggle,
        onTimeChange: handleTimeRangeChange,
      }}
    >
      {children}
    </UIStoreContext.Provider>
  );
};
