import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.DJANGO_SERVER}/user/login/`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        });

        const data = await res.json();

        if (res.ok && data.user) {
          const user = {
            id: data.user.id,
            name: data.user.username,
            email: data.user.email
          };

          return { ...user, accessToken: data.access };
        }

        return null;
      }
    })
  ],
  callbacks: {},
  pages: {
    signIn: "/auth/login"
  }
};
