import NextAuth from "next-auth";
import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";
import Google from "next-auth/providers/google";
import { getUser, checkInvites } from "@/app/lib/data";
 
// *DO NOT* create a `Pool` here, outside the request handler.
 
export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  // Create a `Pool` inside the request handler.
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  return {
    adapter: NeonAdapter(pool),
    providers: [Google],
    callbacks: {
        async signIn({ user, profile }) {
            const email = profile?.email || user?.email;

            if (!email) {
                return false; // 🚫 stop sign-in if no email
            }
            
            const userbong = await getUser(email)
            const invite = await checkInvites(email)
            console.log(userbong)
            console.log(invite)
            if (userbong || invite) {
                
                return true
            } else { return false }
        },
    },
    pages: {
        error: "/error",
    }
  }
})