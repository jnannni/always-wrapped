"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export function useAuth() {
    const {data: session} = useSession();
    const [isTokenValid, setIsTokenValid] = useState(false);

    useEffect(() => {
        async function checkSpotifyToken() {
            if (!session?.accessToken) {
                setIsTokenValid(false);
                return {
                    user: null,
                    id: null,
                    accessToken: null
                };
            } 

            try {
                const res = await fetch('/api/auth/validate-spotify-token');
                const {isValid} = await res.json();
                setIsTokenValid(isValid);
            } catch(err) {
                setIsTokenValid(false);
            }
        }
        checkSpotifyToken();
    }, [session]);

    if (!isTokenValid) {
        return {
            user: null,
            id: null,
            accessToken: null,
        }
    }

    return {
        user: session?.user,
        id: session?.user?.id,
        accessToken: session?.accessToken,
    }
}