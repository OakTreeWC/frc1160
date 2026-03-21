import Image from "next/image";
import Link from 'next/link';
import NavBar from '@/app/ui/navbar';

export default function Page() {
  return (
    <main>
        <NavBar />
        <Image src="/homepage.png" height={"1330"} width={"2000"} alt="background photo" className="w-full overflow-hidden bg-center fixed inset-0 z-0" />
        
        <div className="h-screen w-screen absolute z-10 font-light" style={{padding:"10% 0 25% 0"}}>
            <h1 className="place-self-center italic text-9xl m-10" >lwk its the physics that matters - said nobody ever</h1>
        </div>
    </main>
  );
}
