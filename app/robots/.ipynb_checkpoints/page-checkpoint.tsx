import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <main>
            <div id="cards" className="pt-30 relative text-black w-full flex flex-col opacity-100 bg-white">
                <div className="py-19 px-10 md:px-45 w-full">
                    <div className="flex flex-row justify-center flex-wrap">
                        <div className="flex flex-col items-center space-y-5 px-8 text-center">
                            <span className="text-6xl font-light flex flex-col space-y-2">
                                Our Robots
                            </span>
                        </div>
                    </div>
                </div>
                <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
                <div className="py-19 px-10 md:px-45 w-full">
                    <div className="flex flex-row justify-center flex-wrap">
                        <Link href="/robots/tirex" className="flex flex-col items-center space-y-5 px-8 text-center">
                            <span className="text-6xl font-light flex flex-col space-y-2">
                                [Ti]-Rex
                                <span className="text-4xl font-normal">
                                    2026 REBUILT
                                </span>
                            </span>
                            <span className="flex justify-center">
                                <Image src="/robots/tirex/tirex.png" width={635} height={508} alt="Ti-Rex, our 2026 REBUILT Robot" />
                            </span>
                        </Link>
                    </div>
                </div>
                <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
                <div className="py-19 px-10 md:px-45 w-full">
                    <div className="flex flex-row justify-center flex-wrap">
                        <Link href="/robots/stingray" className="flex flex-col items-center space-y-5 px-8 text-center">
                            <span className="text-6xl font-light flex flex-col space-y-2">
                                S[Ti]ngray
                                <span className="text-4xl font-normal">
                                    2025 REEFSCAPE
                                </span>
                            </span>
                            <span className="flex justify-center">
                                <Image src="/robots/stingray/stingray.jpeg" width={635} height={508} alt="Stingray, our 2025 REEFSCAPE Robot" />
                            </span>
                        </Link>
                    </div>
                </div>
                <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            </div>
        </main>
    );
}