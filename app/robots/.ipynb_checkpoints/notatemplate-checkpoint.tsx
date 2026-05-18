import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return (
    <main>
        <div id="cards" className="pt-30 relative text-black w-full flex flex-col opacity-100 bg-white">
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row justify-center flex-wrap">
                    <div className="flex flex-col items-center space-y-5">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            [Ti]-Rex
                        </span>
                        <span className="flex justify-center">
                            <Image src="/robots/tirex.png" width={635} height={508} alt="Ti-Rex, our 2026 REBUILT Robot" />
                        </span>
                        <span className="text-xl font-light px-8">
                            [Ti]-Rex is Team 1160's 2026 REBUILT Robot. It 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
