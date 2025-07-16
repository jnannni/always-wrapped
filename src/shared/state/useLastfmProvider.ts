"use client"
import { LastfmResType } from "../types/lastfm";
import { useState, useCallback } from "react";
import { fetchLastfmData } from "../api/fetchLastfmData";

export function useLastfmProvider() {
    const [items, setItems] = useState<LastfmResType | null>(null);
  const [fetched, setFetched] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async () => {
    if (pending) return;

    setPending(true);
    try {
      const data = await fetchLastfmData();
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

  return { items, pending, error, fetched, fetch };
}