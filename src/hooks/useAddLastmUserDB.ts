export function useAddLastmUserDB() {
    async function submit(username: string, accessToken: string) {
        const res = await fetch("/api/lastfm-db", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                username: username,
            }),
        });
        const result = await res.json();
        if (result.error) {
            console.log(result.error); // add a toast
        } else console.log("Inserted " + result.data); // add a toast
    }
    return {submit};
}