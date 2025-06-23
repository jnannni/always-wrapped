export type LastfmUser = {
    age: string;
    album_count: string;
    artist_count: string;
    bootstrap: string;
    country: string;
    gender: string;
    image: LastfmImage[];
    name: string;
    playcount: string;
    playlists: string;
    realname: string;
    registered: {
        unixtime: string;
        "#text": string;
    }
    subscriber: string;
    track_count: string;
    type: string;
    url: string;
}

type LastfmImage = {
    size: 'small' | 'medium' | 'large' | 'extralarge';
    "#text": string; 
}