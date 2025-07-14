"use client"
import useUIStoreContext from "@/shared/state/useUIStoreContext";
import { TimePeriod as SpotifyTimePeriod } from "@/shared/types/spotify";
import { TimePeriod as LastfmTimePeriod } from "@/shared/types/lastfm";
import { useEffect, useState } from "react";
import { fetchGenres } from "../lastfm/getTopGenres";

export function useSpotifyTopTracks(timePeriod: SpotifyTimePeriod) {
    const {items} = useUIStoreContext();
    
    if (items?.type !== "spotify") return [];
    
    return items.topTracks[timePeriod];
}

export function useLastfmTopTracks(timePeriod: LastfmTimePeriod) {
    const {items} = useUIStoreContext();
    
    if (items?.type !== "lastfm") return [];
    
    return items.topTracks[timePeriod];
}

export function useSpotifytopArtists(timePeriod: SpotifyTimePeriod) {
    const {items} = useUIStoreContext();
    
    if (items?.type !== "spotify") return [];
    
    return items.topArtists[timePeriod];
}

export function useLastfmTopArtists(timePeriod: LastfmTimePeriod) {
    const {items} = useUIStoreContext();
    
    if (items?.type !== "lastfm") return [];
    
    return items.topArtists[timePeriod];
}

export function useSpotifyWrappedOverview(timePeriod: SpotifyTimePeriod) {
    const tracks = useSpotifyTopTracks(timePeriod);
    const artists = useSpotifytopArtists(timePeriod);
    
    const genres = artists.map((artist) => {
        return artist.genres;
    });
    const sortedGenres = genres.flat().reduce<Record<string, number>>((acc, genre: string) => {
        acc[genre] = (acc[genre] || 0) + 1;
        return acc;
    }, {});

    return { tracks, artists, sortedGenres };
}

export function useLastfmWrappedOverview(timePeriod: LastfmTimePeriod) {
    const tracks = useLastfmTopTracks(timePeriod);
    const artists = useLastfmTopArtists(timePeriod);

    const tracksNames = tracks.map((track) => track.name);
    const artistsNames = artists.map((artist) => artist.name);

    const genres = useLastfmTopGenres(tracksNames, artistsNames);
    return { tracks, artists, genres };
}

export function useLastfmTopGenres(tracks: string[], artists: string[]) {
    const [genres, setGenres] = useState<Array<[string, number]>>([]);
    useEffect(() => {
        async function loadData() {
            try {
                const tags= await fetchGenres(tracks, artists);
                if(!tags) {
                    setGenres([]);
                    return;
                }
                const topTracks: Record<string, number> = {};
                for (const tag in tags) {
                    topTracks[tag] = (topTracks[tag] || 0) + 1;
                }
                const sortedGenres = Object.entries(topTracks).sort((a, b) => b[1] - a[1]);
                setGenres(sortedGenres);
            } catch (err) {
                console.error(err);
            }
        }
        loadData();
    }, [artists, tracks]);
    return genres;
}