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
                            <Image src="/robots/stingray/stingray.jpeg" width={635} height={508} alt="Ti-Rex, our 2026 REBUILT Robot" />
                        </span>
                        <span className="text-xl font-light w-[67%]">
                            S[Ti]ngray is our 2025 season
                            competition robot. Last year’s
                            competition involved scoring “coral,”
                            which were PVC pipes, onto the“reef,”
                            a metal structure with prongs
                            at various heights, removing “algae”
                            balls from the reef, and climbing onto
                            a cage to lift our robot completely off
                            the ground. Our robot was able to
                            score coral on all levels of the reef,
                            except the lowest section. Weighing
                            145 pounds and traveling at a max
                            speed of 11.5 miles per hour, our robot
                            was capable of scoring coral on the
                            reef every 15-25 seconds. To achieve
                            this, we had a “swerve” drivetrain
                            base which allows omnidirectional
                            movement and a two-stage
                            cascading elevator. Towards the final
                            30 seconds of the match, our robot
                            climbs and lifts itself off the ground
                            using our climber. We used a system
                            of rack and pinions to drop our
                            funnel, and our climber deployed
                            using a winch system.
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
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 md:width-[50%]">
                <div className="flex flex-row justify-center flex-wrap">
                    <div className="flex flex-col items-center space-y-5 px-8">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Resources
                        </span>
                        <div className="flex justify-center opacity-100">
                            <Link href="https://www.youtube.com/watch?v=LoP4uRPXb0g" className="p-3 border-5 border-blue-500 transition-colors ease-in-out duration-300 font-bold text-2xl text-blue-500 hover:border-blue-400 hover:text-blue-400">Robot Reveal</Link>
                        </div>
                        <div className="flex justify-center opacity-100">
                            <Link href="/robots/stingray/technical.pdf" className="p-3 border-5 border-blue-500 transition-colors ease-in-out duration-300 font-bold text-2xl text-blue-500 hover:border-blue-400 hover:text-blue-400">Technical Binder</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
