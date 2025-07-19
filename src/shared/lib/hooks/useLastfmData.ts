"use client";
import useUIStoreContext from "@/shared/state/useUIStoreContext";
import { TimePeriod as LastfmTimePeriod, LastfmTrack } from "@/shared/types/lastfm";
import { useEffect, useState, useMemo } from "react";
import { fetchGenres } from "../lastfm/getTopGenres";

export function useLastfmTopTracks(timePeriod: LastfmTimePeriod) {
    const {items} = useUIStoreContext();
    
    return useMemo(() => {
        if (items?.type !== "lastfm") return [];
        return items.topTracks[timePeriod];

    }, [items, timePeriod]);
}

export function useLastfmTopArtists(timePeriod: LastfmTimePeriod) {
    const {items} = useUIStoreContext();
    
    return useMemo(() => {
        if (items?.type !== "lastfm") return [];
        return items.topArtists[timePeriod];
    }, [items, timePeriod]);
}

export function useLastfmWrappedOverview(timePeriod: LastfmTimePeriod) {
    const tracks = useLastfmTopTracks(timePeriod);
    const artists = useLastfmTopArtists(timePeriod);    

    const genres = useLastfmTopGenres(tracks);
    return { tracks, artists, genres };
}

export function useLastfmTopGenres(tracks: LastfmTrack[]) {
    const [genres, setGenres] = useState<Array<[string, number]>>([]);

    
    useEffect(() => {
        async function loadData() {
            try {
                const tagResults= await fetchGenres(tracks);
                if(!tagResults) {
                    setGenres([]);
                    return;
                }
                const genreCounts: Record<string, number> = {};
                tagResults.forEach(tags => {
                    if (tags && Array.isArray(tags)) {
                        tags.forEach(tag => {
                            if (tag && tag.name) {
                                genreCounts[tag.name] = (genreCounts[tag.name] || 0) + 1;
                            }
                        });
                    }
                });
                const sortedGenres = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]);
                setGenres(sortedGenres);
            } catch (err) {
                console.error(err);
            }
        }
        loadData();
    }, [tracks]);
    const genresTyped = genres.map(([name, value]) => ({name, value}));
    return genresTyped;
}