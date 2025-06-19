import { createStore } from "zustand";
import { type SpotifyArtist, SpotifyTrack, SpotifyUserAlbums } from "@/app/types/spotify";

type SpotifyState = {
    artists: SpotifyArtist[];
    tracks: SpotifyTrack[];
    albums: SpotifyUserAlbums[];
}

type SpotifyActions = {
    setArtists: (artist: SpotifyArtist) => void;
    setTracks: (track: SpotifyTrack) => void;
    setAlbums: (albums: SpotifyUserAlbums) => void;
}

type SpotifyStore = SpotifyState & SpotifyActions;


// export const createSpotifyStore = (
//     initState: SpotifyStore = defaultInitState
// ) => {
//     return createStore<SpotifyStore>()((set) => ({
//     }))
// }