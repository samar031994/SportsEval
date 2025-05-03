import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID!,
        clientSecret: process.env.NEXT_PUBLIC_AUTH_GOOGLE_SECRET!,
      }),
    ],
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  };
  
  export default NextAuth(authOptions);