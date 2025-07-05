import useUIStoreContext from "@/shared/state/useUIStoreContext";
import { TimePeriod as SpotifyTimePeriod } from "@/shared/types/spotify";
import { TimePeriod as LastfmTimePeriod } from "@/shared/types/lastfm";

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