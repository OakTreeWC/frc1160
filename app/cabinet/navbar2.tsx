'use client';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

export default function Navbar2() {
  const pathname = usePathname();
  const links = [
      {"name":"Engineering","href":"/cabinet/engineering"},
      {"name":"Business", "href":"/cabinet/business"},
      {"name":"The Overlord", "href":"/cabinet/overlord"}
  ]
  return (
    <main className = {`flex flex-row space-x-0 justify-left items-center md:p-0  md:h-25 absolute top-25 z-10 md:bg-transparent w-full`}>

        
        
        <span 
            className = {`flex flex-wrap flex-row space-x-0 justify-left bg-gray-200 p-0 md:h-25  md:flex w-full justify-center items-center`}  
            >
            {
                links.map((link)=>{
                    return (
                        <Link 
                            key = {link.name}
                            className = {`text-xl flex items-center justify-center align-middle p-4 bg-clear text-black`} 
                            href={link.href}
                        >
                            <p className={clsx("transition hover:border-blue-500 border-4 px-2 py-1.5",{'border-blue-500' : pathname === link.href,'border-transparent':pathname !== link.href},)}>
                                {link.name}
                            </p>
                        </Link>
                    )
                })
            }
        </span>
        
    </main>
    )
}