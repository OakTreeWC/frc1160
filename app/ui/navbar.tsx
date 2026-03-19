import Image from "next/image";
import Link from 'next/link';
import TiLogo from '@/app/ui/TiLogo';

export default function NavBar() {
  return (
    <main className = {`flex flex-row space-x-0 justify-left bg-white p-0 h-25 fixed`} style={{width:"100%"}}>
        <Link
        className="flex items-center justify-center align-middle hover:drop-shadow-2xl object-contain"
        href="/"
        >
            <TiLogo />
        </Link>
        <span className = {`flex flex-row space-x-0 justify-left bg-white p-0 h-25`} style={{opacity:"70%"}} >
            <Link className = {`text-xl flex items-center justify-center align-middle p-4 bg-clear text-black`} href="/aboutus"><p className="hover:border-blue-500 border-transparent border-4 p-1">About Us</p></Link>
            <Link className = {`text-xl flex items-center justify-center align-middle p-4 bg-clear text-black`} href="/contactus"><p className="hover:border-blue-500 border-transparent border-4 p-1">Contact Us</p></Link>
        </span>
    </main>
  );
}
