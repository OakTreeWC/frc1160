import Image from "next/image";
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="text-center flex flex-row place-content-start justify-center bg-white/85 flex-wrap h-screen text-white md:mt-0">
      <div className="bg-gray-200 flex flex-col-reverse justify-between md:flex-row gap-5 p-10 md:px-50 m-10 w-full md:h-100 rounded-2xl">
        <div className="flex flex-col text-4xl justify-start gap-5 text-center grow text-black m-10">
            <h1 className="text-7xl font-medium">404 Not Found</h1>
            <span>click this guy to go home</span>
        </div>
        <Link href="/"><Image src="/404/error404.png" className="w-full h-full object-contain" width={300} height={300} loading="eager" alt="404 Error"></Image></Link>
      </div>
    </div>
  );
}
