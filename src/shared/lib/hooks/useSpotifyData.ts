"use client"
import useUIStoreContext from "@/shared/state/useUIStoreContext";
import { TimePeriod as SpotifyTimePeriod } from "@/shared/types/spotify";
import { useEffect, useState } from "react";
import { SpotifyAlbum } from "@/shared/types/spotify";
import { getAlbumsPopularity } from "../spotify/getAlbumsPopularity";

export function useSpotifyTopTracks(timePeriod: SpotifyTimePeriod) {
    const {items} = useUIStoreContext();
    
    if (items?.type !== "spotify") return [];
    
    return items.topTracks[timePeriod];
}

export function useSpotifytopArtists(timePeriod: SpotifyTimePeriod) {
    const {items} = useUIStoreContext();
    
    if (items?.type !== "spotify") return [];
    
    return items.topArtists[timePeriod];
}

export function useSpotifyTopAlbums() {
    const {items} = useUIStoreContext();
    const [albums, setAlbums] = useState<SpotifyAlbum[]>([]);

    useEffect(() => {
        async function fetchAlbums() {
            if (items?.type !== "spotify") return [];
            
            const albumsIds = items.userAlbums.map((album) => album.album.id);
            const res = await getAlbumsPopularity(albumsIds);
            if(res) {
                const validAlbums = res.filter((album) => album !== null);
                setAlbums(validAlbums);
            } else setAlbums([]);
        }
        fetchAlbums();
    }, [])
}

export function useSpotifyWrappedOverview(timePeriod: SpotifyTimePeriod) {
    const tracks = useSpotifyTopTracks(timePeriod);
    const artists = useSpotifytopArtists(timePeriod);
    
    const unsortedGenres = artists.map((artist) => {
        return artist.genres;
    });
    const sortedGenres = unsortedGenres.flat().reduce<Record<string, number>>((acc, genre: string) => {
        acc[genre] = (acc[genre] || 0) + 1;
        return acc;
    }, {});

    const genres = Object.entries(sortedGenres).map(([name, value]) => ({ name, value }));

    return { tracks, artists, genres };
}