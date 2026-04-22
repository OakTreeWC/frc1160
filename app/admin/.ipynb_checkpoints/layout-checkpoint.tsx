import { redirect } from 'next/navigation';
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import Navbar2 from "@/app/admin/navbar2";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await auth()
    if (!session) return redirect("/404")

    return (
        <SessionProvider>
            <Navbar2 />
            {children}
        </SessionProvider>
    )
}