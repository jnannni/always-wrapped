export type SpotifyResType = {
    userProfile: SpotifyUserProfile;
    topTracks: {
        short_term: SpotifyTrack[];
        medium_term: SpotifyTrack[];
        long_term: SpotifyTrack[];
    };
    topArtists: {
        short_term: SpotifyArtist[];
        medium_term: SpotifyArtist[];
        long_term: SpotifyArtist[];
    }
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