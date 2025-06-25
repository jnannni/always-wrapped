import { SpotifyResType } from "@/shared/types/spotify"

export type SpotifyContextType = {
    spotifyStore: SpotifyResType;
    addSpotifyData: (data: SpotifyResType) => void;
}