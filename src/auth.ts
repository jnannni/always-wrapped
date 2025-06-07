
import NextAuth from "next-auth"
import Spotify from "next-auth/providers/spotify"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import "next-auth/jwt";
import jwt from "jsonwebtoken";
 
declare module "next-auth" {
  interface Session {
    accessToken?: string;
    supabaseAccessToken?: string;
    id?: string;
    email?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    id?: string;
    email?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Spotify],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL ?? '',
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  }),
  callbacks: {
    jwt({token, account, user}) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = Number(account.expires_at) * 1000;
      }
      if (user) {
        token.id = user.id;
        token.email = user.email ?? '';
      }
      return token;
    },
    async session({ session, token }) {
      const signingSecret = process.env.SUPABASE_JWT_SECRET
      if (signingSecret) {
        const payload = {
          aud: "authenticated",
          exp: Math.floor(new Date(session.expires).getTime() / 1000),
          sub: token.id,
          email: token.email,
          role: "authenticated",
        }
        session.supabaseAccessToken = jwt.sign(payload, signingSecret)
      }
      session.accessToken = token.accessToken;
      session.user = {
        ...session.user,
        id: token.id ?? '',
        email: token.email ?? '',
      };
      return session
    }
  },
  session: {
    strategy: "jwt",
  },
})