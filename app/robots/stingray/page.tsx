import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return (
    <main>
        <div id="cards" className="pt-30 relative text-black w-full flex flex-col opacity-100 bg-white">
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row justify-center flex-wrap">
                    <div className="flex flex-col items-center space-y-5 px-8 text-center">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            S[Ti]ngray
                        </span>
                        <span className="flex justify-center">
                            <Image src="/robots/tirex.png" width={635} height={508} alt="Ti-Rex, our 2026 REBUILT Robot" />
                        </span>
                        <span className="text-xl font-light w-[67%]">
                            S[Ti]ngray is Team 1160's 2025 REEFSCAPE Robot.
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row justify-center flex-wrap">
                    <div className="flex flex-col items-center space-y-5 px-8">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Competitions
                        </span>
                        <span className="flex flex-col justify-center text-center space-y-7">
                            <span className="text-xl font-light flex flex-col justify-center text-center space-y-1">
                                <span className="text-3xl font-medium">Arizona North Regional</span>
                                <span className="text-2xl font-medium pb-1">March 12 to March 15, 2025</span>
                                <span>Team 1160 was Rank 10 with a record of 8-6-0</span>
                                <span className="text-2xl font-normal">Awards</span>
                                <span>None</span>
                            </span>
                            <span className="text-xl font-light flex flex-col justify-center text-center space-y-1">
                                <span className="text-3xl font-medium">Aerospace Valley Regional</span>
                                <span className="text-2xl font-medium pb-1">April 2 to April 5, 2025</span>
                                <span>Team 1160 was Rank 25 with a record of 9-10-0</span>
                                <span className="text-2xl font-normal">Awards</span>
                                <span>Regional Finalists</span>
                            </span>
                            <span className="text-2xl font-light flex flex-col justify-center text-center space-y-1">
                                <span className="text-3xl font-medium">SoCal Showdown</span>
                                <span className="text-2xl font-medium pb-1">October 10 to October 12, 2025</span>
                                <span>Team 1160 was Rank 26 with a record of 4-9-0</span>
                                <span className="text-2xl font-normal">Awards</span>
                                <span>N/A</span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
