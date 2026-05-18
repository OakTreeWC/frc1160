'use server';
import Image from "next/image";
import Link from 'next/link';
import Navbar2 from '@/app/cabinet/navbar2';
import { getEngineering } from '@/app/lib/data';
import clsx from 'clsx';

export default async function Page() {
  return (
    <main className="text-center md:text-left h-screen">
        <Navbar2 />
        <Image src="/cabinet/engineering/jessietran.jpg" width={6000} height={6700} alt="the robotics overlord" className="mt-25 h-full object-fill" ></Image>
    </main>
  );
}
