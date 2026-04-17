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
                            [Ti]-Rex
                        </span>
                        <span className="flex justify-center">
                            <Image src="/robots/tirex/tirex.png" width={635} height={508} alt="Ti-Rex, our 2026 REBUILT Robot" />
                        </span>
                        <span className="text-xl font-light w-[67%]">
                            [Ti]-Rex is Team 1160's 2026 REBUILT Robot. It features a double fixed shooter, expandable hopper, single roller intake, and a cool 67 fuel capacity.
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
                                <span className="text-3xl font-medium">CA District Ventura County Event</span>
                                <span className="text-2xl font-medium pb-1">March 13 to March 15, 2026</span>
                                <span>Team 1160 was Rank 10 with a record of 8-7-0</span>
                                <span className="text-2xl font-normal">Awards</span>
                                <span>Imagery Award in honor of Jack Kamen</span>
                            </span>
                            <span className="text-xl font-light flex flex-col justify-center text-center space-y-1">
                                <span className="text-3xl font-medium">CA District San Gabriel Valley Event</span>
                                <span className="text-2xl font-medium pb-1">March 27 to March 29, 2026</span>
                                <span>Team 1160 was Rank 6 with a record of 10-6-0</span>
                                <span className="text-2xl font-normal">Awards</span>
                                <span>Creativity Award sponsored by Rockwell Automation</span>
                            </span>
                            <span className="text-2xl font-light flex flex-col justify-center text-center space-y-1">
                                <span className="text-3xl font-medium">FIRST California Southern State Championship</span>
                                <span className="text-2xl font-medium pb-1">April 9 to April 12, 2026</span>
                                <span>Team 1160 was Rank 41 with a record of 5-7-0</span>
                                <span className="text-2xl font-normal">Awards</span>
                                <span>Team Sustainability Award sponsored by Dow</span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 md:width-[50%]">
                <div className="flex flex-row justify-center flex-wrap">
                    <div className="flex flex-col items-center space-y-5 px-8">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Resources
                        </span>
                        <div className="flex justify-center opacity-100">
                            <Link href="https://cad.onshape.com/documents/f4428a730eece9993b8d3a7c/w/cb27c4e7fa3427cf026b293b" className="p-3 border-5 border-blue-500 transition-colors ease-in-out duration-300 font-bold text-2xl text-blue-500 hover:border-blue-400 hover:text-blue-400">OnShape CAD</Link>
                        </div>
                        <div className="flex justify-center opacity-100">
                            <Link href="/robots/tirex/2026 Rebuilt Tech Binder.pdf" className="p-3 border-5 border-blue-500 transition-colors ease-in-out duration-300 font-bold text-2xl text-blue-500 hover:border-blue-400 hover:text-blue-400">Technical Binder</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
