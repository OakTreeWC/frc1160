'use client'
import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useSession, signOut } from "next-auth/react";

export default function Dropdown(
  { links, pathname }: { links: any[]; pathname: string }
) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const { data: session } = useSession();
    return (
        <div className="relative z-50">
            <div className="relative inline-block w-full h-full text-left">
                {/* Dropdown button */}
                <button
                    type="button"
                    className="flex flex-row space-x-0 justify-center p-2 bg-gray-100 border-2 rounded-xl w-12 h-12 flex md:hidden hover:cursor-pointer"
                    onClick={toggleDropdown}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" fill="#000000" /></svg>
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                    <div className="origin-top-right absolute
                                    right-0 mt-8 w-80 rounded-md
                                    shadow-lg bg-white opacity-100 ring-1 ring-black
                                    ring-opacity-5 focus:outline-none z-[67]">
                        <div className="py-1">
                            {
                                links.map((link) => {
                                        return (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className={clsx("block px-4 py-4 text-xl text-black opacity-100", {'bg-gray-100':pathname===link.href,'hover:bg-gray-100':pathname!==link.href})}
            onClick={toggleDropdown}                                  >
                                                {link.name}
                                            </Link>
                                        )
                                    }
                                )
                            }
                            <Link
                                href="/dashboard"
                                className={clsx("block px-4 py-4 text-xl text-black opacity-100", {'bg-gray-100':pathname.includes("/dashboard"),'hover:bg-gray-100':!(pathname.includes("/dashboard")),'hidden':(session?.user?.role === "admin" || !session)})}
onClick={toggleDropdown}                                  >
                                Dashboard
                            </Link>
                            <Link
                                href="/admin"
                                className={clsx("block px-4 py-4 text-xl text-black opacity-100", {'bg-gray-100':pathname.includes("/admin"),'hover:bg-gray-100':!(pathname.includes("/admin")),'hidden':session?.user?.role !== "admin"})}
onClick={toggleDropdown}                                  >
                                Admin
                            </Link>
                            <button onClick={() => signOut({ redirectTo: "/" })} className = {clsx(`block px-4 py-4 text-xl text-black opacity-100 w-full text-left`, {'hidden':!session})}>
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}