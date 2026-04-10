import Image from "next/image";
import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="text-center flex flex-row place-content-center justify-center flex-wrap h-screen text-white">
        <div className="flex flex-col justify-center m-10">
            <span>womp womp</span>
            <span>click vishwa to go home</span>
        </div>
        <Link href="/"><Image src="/vishwa.webp" width={300} height={300} loading="eager" alt="vishway"></Image></Link>
        
    </main>
  );
}
