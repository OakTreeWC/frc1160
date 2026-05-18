import { notFound } from 'next/navigation';
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import Navbar2 from "@/app/admin/navbar2";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await auth()
    if (session?.user?.role !== "admin") return notFound()

    return (
        <div className="w-full">
        <SessionProvider>
            <Navbar2 />
            {children}
        </SessionProvider>
        </div>
    )
}