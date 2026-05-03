import { auth } from "@/auth";
import { notFound, redirect } from 'next/navigation';
import Navbar2 from "@/app/dashboard/navbar2";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await auth();
    if (!session) return notFound()
    if (session?.user?.role === "admin") {redirect("/admin")}
    return (
        <div className="w-full h-full">
            <Navbar2 pfp={session?.user?.image} name={session?.user?.name} role={session?.user?.role} />
            {children}
        </div>
    )
}