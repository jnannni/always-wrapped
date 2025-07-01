export type LastfmResType = {
    userProfile: LastfmUser;
    topTracks: {
        overall: LastfmTrack[];
        "7day": LastfmTrack[];
        "1month": LastfmTrack[];
        "3month": LastfmTrack[];
        "6month": LastfmTrack[];
        "12month": LastfmTrack[];
    };
    topArtists: {
        overall: LastfmArtist[];
        "7day": LastfmArtist[];
        "1month": LastfmArtist[];
        "3month": LastfmArtist[];
        "6month": LastfmArtist[];
        "12month": LastfmArtist[];
    };
    topAlbums: {
        overall: LastfmAlbum[];
        "7day": LastfmAlbum[];
        "1month": LastfmAlbum[];
        "3month": LastfmAlbum[];
        "6month": LastfmAlbum[];
        "12month": LastfmAlbum[];
    };
    type: 'lastfm';
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
    "@attr"?: {
        rank: number;
    }
}

export type LastfmAlbum = {
    artist: LastfmArtist;
    image: LastfmImage[];
    name: string;
    playcount: number;
    "@attr"?: {
        rank: number;
    }
}

export type LastfmTrack = {
    name: string;
    image: LastfmImage[];
    artist: LastfmArtist;
    playcount: number;
    "@attr"?: {
        rank: number;
    }
}

type LastfmImage = {
    size: 'small' | 'medium' | 'large' | 'extralarge';
    "#text": string; 
}