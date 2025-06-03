
import NextAuth from "next-auth"
import Spotify from "next-auth/providers/spotify"
import "next-auth/jwt";
 
declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Spotify],
  callbacks: {
    jwt({token, account}) {
      if (account?.provider === "spotify") {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken
      }
      return session
    }
  }
})