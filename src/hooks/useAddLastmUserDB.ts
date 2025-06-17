import {auth} from "@/auth";
export function useAddLastmUserDB() {
    async function submit(username: string) {
        const session = await auth();
        const accessToken = session?.supabaseAccessToken;
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