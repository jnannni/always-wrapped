"use client";
import { useCallback, useState } from "react";
import { SpotifyResType } from "../types/spotify";
import { LastfmResType } from "../types/lastfm";

type DataType = SpotifyResType | LastfmResType;

export const useDataProvider = <T extends DataType>(
  fetchFn: () => Promise<T | null>,
  source: T["type"]
) => {
  const [items, setItems] = useState<T | null>(null);
  const [fetched, setFetched] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async () => {
    setPending(true);

    try {
      const data = await fetchFn();
      if (!data) {
        setError(new Error("Failed to fetch data"));
        return;
      }
      // add removed tracks fetching -> promise.all
      // filter data base on removed tracks before setting it to the state
      setItems(data);
      setFetched(true);
    } catch (error) {
      setError(error as Error);
    } finally {
      setPending(false);
    }
  }, [fetchFn]);

  return { items, pending, error, fetched, fetch };
};
