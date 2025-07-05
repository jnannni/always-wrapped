"use client";

import { useSession } from "next-auth/react";

export function useAuth() {
    const {data} = useSession();

    return {
        user: data?.user,
        id: data?.user?.id,
        accessToken: data?.accessToken,
    }
}