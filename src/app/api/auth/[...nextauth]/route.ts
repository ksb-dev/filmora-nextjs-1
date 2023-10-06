import NextAuth from "next-auth";
import { authOptions } from "@/lib/AuthOptions";

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
