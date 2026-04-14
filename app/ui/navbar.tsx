'use client';

import Image from "next/image";
import Link from 'next/link';
import TiLogo from '@/app/ui/TiLogo';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Dropdown from '@/app/ui/dropdown';

export default function NavBar() {
  const pathname = usePathname();
  const links = [
      {"name":"Home","href":"/"},
      {"name":"About Us", "href":"/aboutus"},
      {"name":"Mentors","href":"/mentors"},
      {"name":"Robots","href":"/robots"},
      {"name":"Resources","href":"/resources"},
      {"name":"Donate","href":"/donate"},
      {"name":"Login","href":"https://admin.wchen.dev"},
  ]
  return (
    <main className = {`flex flex-row space-x-0 justify-left items-center bg-white p-0 h-25 absolute inset-0 z-10 md:bg-transparent opacity-90`} style={{width:"100%"}}>
        <Link
        className="flex items-center h-full flex-shrink-0 flex-grow-0 bg-white"
        href="/"
        >
            <TiLogo />
        </Link>

        <span 
            className = {`flex-1 md:hidden`} 
            />
        
        <span 
            className = {`flex flex-row space-x-0 justify-left bg-white p-0 h-25 hidden md:flex w-full`}  
            >
            {
                links.map((link)=>{
                    return (
                        <Link 
                            key = {link.name}
                            className = {`text-xl flex items-center justify-center align-middle p-4 bg-clear text-black`} 
                            href={link.href}
                        >
                            <p className={clsx("hover:border-blue-500 border-4 px-2 py-1.5",{'border-blue-500' : pathname === link.href,'border-transparent':pathname !== link.href},)}>
                                {link.name}
                            </p>
                        </Link>
                    )
                })
            }
        </span>

        <div className="md:hidden w-11 h-11">
            <Dropdown pathname={pathname} links={links} />
        </div>
        
        <span className={`flex flex-row space-x-0 justify-right bg-white p-0 h-10 mr-10 flex md:hidden`}>
            
        </span>
    </main>
  );
}
