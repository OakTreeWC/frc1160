import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return (
    <main className="h-screen">
        <div id="cards" className="pt-30 relative text-black w-full h-full flex flex-col opacity-85 bg-white">
            <div className="pt-19 pb-9 px-10 md:px-45 w-full">
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="flex flex-col items-center space-y-7">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Resources
                        </span>
                        
                        
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="pt-9 px-10 md:px-45 w-full">
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="flex flex-col items-center space-y-7">
                        <div className="flex justify-center opacity-100">
                            <Link href="/resources/brand" className="p-3 border-5 border-blue-500 transition-colors ease-in-out duration-300 font-bold text-2xl text-blue-500 hover:border-blue-400 hover:text-blue-400">Brand Book</Link>
                        </div>
                        <div className="flex justify-center opacity-100">
                            <Link href="/resources/sponsorpacket.pdf" className="p-3 border-5 border-blue-500 transition-colors ease-in-out duration-300 font-bold text-2xl text-blue-500 hover:border-blue-400 hover:text-blue-400">Sponsorship Packet</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
