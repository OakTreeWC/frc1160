import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return (
    <main className="">
        <div id="cards" className="pt-30 relative text-black w-full h-full flex flex-col opacity-85 bg-white">
            <div className="pt-19 pb-9 px-10 md:px-45 w-full">
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="flex flex-col items-center space-y-7">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Sponsorship Packet
                        </span>
                        
                        
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="pt-9 px-10 md:px-45 w-full h-screen">
                <div className="flex flex-row flex-wrap w-full h-full justify-center">
                    <div className="flex flex-col items-center w-full h-full space-y-7">
                        <iframe src="/resources/sponsorpacket.pdf" width={"100%"} height={"100%"} className="aspect-video m-10" />
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
