export async function getLastfmProfile(username :string) {
    const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${username}&api_key=${process.env.LASTFM_KEY}&format=json`);
    const data = await res.json();
    console.log(data);
    return data;
}