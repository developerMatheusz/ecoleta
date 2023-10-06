/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        if (!credentials?.cpf || !credentials?.password) {
          throw new Error("Credenciais inválidas");
        }

        const cred = {
          cpf: credentials?.cpf.replace(/[^\d]+/g, ""),
          password: credentials?.password
        };

        const res = await fetch(`${process.env.DJANGO_SERVER}/auth/login/`, {
          method: "POST",
          body: JSON.stringify(cred),
          headers: { "Content-Type": "application/json" }
        });

        const data = await res.json();

        if (data.user) {
          const user = {
            id: data.user.id,
            name: data.user.name,
            username: data.user.username,
            email: data.user.email
          };

          return { ...user, accessToken: data.access };
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: "/auth/login"
  }
};
