"use client";
import { SpotifyResType } from "../types/spotify";
import { useState, useCallback, useMemo } from "react";
import { fetchSpotifyData } from "../api/fetchSpotifyData";
export const useSpotifyProvider = () => {
  const [items, setItems] = useState<SpotifyResType | null>(null);
  const [fetched, setFetched] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async () => {
    if (pending) return;
    
    setPending(true);
    try {
      const data = await fetchSpotifyData();
      if (!data) {
        setError(new Error("Failed to fetch data"));
        return;
      }
      setItems(data);
      setFetched(true);
    } catch (error) {
      setError(error as Error);
    } finally {
      setPending(false);
    }
  }, []);

  const returnValue = useMemo(() => ({
    items,
    pending,
    error,
    fetched,
    fetch,
  }), [items, pending, error, fetched, fetch]);
  return returnValue;
};
