import { useDataProvider } from "./useDataProvider";
import { fetchLastfmData } from "../api/fetchLastfmData";

export function useLastfmProvider() {
    return useDataProvider(fetchLastfmData, "lastfm");
}