//base
type SpotifyBaseTrack = {
    artists: SpotifyTrackArtist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    is_playable: boolean;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
}

// artist type
export type SpotifyArtist = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: SpotifyArtistItem[];
}

type SpotifyArtistItem = {
    external_urls: {
        spotify: string;
    };
    followers: {
        href: string;
        total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: {
        url: string;
        height: number;
        width: number;
    }[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

// track type
export type SpotifyTrack = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: SpotifyTrackItem[];
}   

type SpotifyTrackItem = SpotifyBaseTrack &{
    album: SpotifySimplifiedAlbum;
    external_ids: {
        isrc: string;
    };
    popularity: number;
}

type SpotifySimplifiedAlbum = {
    album_type: string;
    total_track: number;
    available_markets: string[];
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: {
        url: string;
        height: number;
        width: number;
    }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: {
        reason: string;
    }
    type: string;
    uri: string;
}

type SpotifyTrackArtist = {
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

// user's album type
export type SpotifyUserAlbums = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: SavedAlbumObject[];
}

type SavedAlbumObject = {
    added_at: string;
    album: SpotifyAlbum;
}

// global album type
type SpotifyAlbum = SpotifySimplifiedAlbum & {
    artists: SpotifySimplifiedArtist[];
    tracks: {
        href: string;
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
        items: SpotifyAlbumTrackItem[];
    };
    copyrights: [
        {
            text: string;
            type: string;
        }
    ];
    external_ids: {
        isrc: string;
        ean: string;
        upc: string;
    };
    genres: string[];
    label: string;
    popularity: number;
}

type SpotifySimplifiedArtist = {
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

type SpotifyAlbumTrackItem = SpotifyBaseTrack & {
    linked_from: {
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
    };
    restrictions: {
        reason: string;
    };
}