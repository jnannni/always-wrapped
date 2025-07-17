export type TimePeriod = "overall" | "7day" | "1month" | "3month" | "6month" | "12month";
export type LastfmResType = {
    userProfile: LastfmUser;
    topTracks: Record<TimePeriod, LastfmTrack[]>
    topArtists: Record<TimePeriod, LastfmArtist[]>
    topAlbums: Record<TimePeriod, LastfmAlbum[]>
    type: 'lastfm';
}

export type LastfmWrappedResType = {
    tracks: LastfmTrack[];
    artists: LastfmArtist[];
    genres: {name: string, value: number}[]
}

export type LastfmUser = {
    age: string;
    country: string;
    gender: string;
    image: LastfmImage[];
    name: string;
    realname: string;
    registered: {
        unixtime: string;
        "#text": string;
    }
}

export type LastfmArtist = {
    name: string;
    image?: LastfmImage[];
    playcount?: number;
    mbid: string;
    "@attr"?: {
        rank: number;
    }
}

export type LastfmAlbum = {
    artist: LastfmArtist;
    image: LastfmImage[];
    name: string;
    mbid: string;
    playcount: number;
    "@attr"?: {
        rank: number;
    }
}

export type LastfmTrackOriginal = {
    name: string;
    image: LastfmImage[];
    artist: LastfmArtist;
    mbid: string;
    playcount: number;
    "@attr"?: {
        rank: number;
    }
}

export type LastfmTrack = Omit<LastfmTrackOriginal, 'artist'> & {
    artists: LastfmArtist[];
}

type LastfmImage = {
    size: 'small' | 'medium' | 'large' | 'extralarge';
    "#text": string; 
}