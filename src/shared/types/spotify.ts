export type TimePeriod = "short_term" | "medium_term" | "long_term";
export type SpotifyResType = {
    userProfile: SpotifyUserProfile;
    topTracks: Record<TimePeriod, SpotifyTrack[]>;
    topArtists: Record<TimePeriod, SpotifyArtist[]>;
    userAlbums: SpotifyUserAlbum[];
    type: 'spotify';
}
type Image = {
    url: string;
    height?: string;
    width?: string;
}
export type SpotifyUserProfile = {
    country: string;
    display_name: string;
    id: string;
    images: Image[];
}


export type SpotifyArtist = {
    id: string;
    name: string;
    images: Image[];
    genres: string[];
    popularity: number;
    followers: {
        total: number;
    };
}

export type SpotifyTrack = {
    id: string;
    artists: SpotifyArtist[];
    album: SpotifyAlbum;
    name: string;
    preview_url: string;
    popularity: number;
}   

export type SpotifyAlbum = {
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    artists: SpotifyArtist[];
    tracks: SpotifyTrack[];
    genres: string[];
    popularity: number;
}

export type SpotifyUserAlbum = {
    added_at: string;
    album: SpotifyAlbum;
}