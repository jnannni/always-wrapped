import { useState } from "react";
import type { LastfmUser } from "@/shared/types/lastfm";
export function useLastfmProfilePreview() {
    const [user, setUser] = useState<LastfmUser | null>(null);

    async function preview(username: string) {
        const data = await fetch("/api/lastfm/profile-preview", {
            method: "POST",
            body: JSON.stringify({ username: username }),
        });
        const result = await data.json();
        setUser(result);
    }
    
    return {user, preview}; 
}