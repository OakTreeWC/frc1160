import Image from "next/image";
import Link from 'next/link';
import NavBar from '@/app/ui/navbar';

export default function Page() {
  return (
    <main>
        <NavBar />
        <div className="z-0" >
            <Image src="/homepage.png" height={"1330"} width={"2000"} alt="hero photo" className="w-full overflow-hidden bg-center absolute left-0 -top-55 z-0 filter brightness-50" />
        </div>
        
        
        <div className="h-screen w-screen absolute z-10 font-light" style={{margin:"15% 0 25% 0"}}>
            <h1 className="place-self-center italic m-10 py-10 text-6xl md:py-none md:text-9xl">
                Feelings are important, but
                it's the physics that matters.
            </h1>
        </div>
    </main>
  );
}
