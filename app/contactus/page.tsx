import Image from "next/image";
import Link from 'next/link';
import NavBar from '@/app/ui/navbar';

export default function Page() {
  return (
    <main>
        <NavBar />
        <div>
            <Image src="/contactus.png" height={"1330"} width={"2000"} alt="background photo" />
        </div>
    </main>
  );
}
