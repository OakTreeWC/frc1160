import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return (
    <main className="h-screen">
        <div id="cards" className="pt-30 relative text-black w-full h-full flex flex-col opacity-85 bg-white">
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row flex-wrap">
                    <div className="flex flex-col items-center space-y-7">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Donate
                        </span>
                        <span className="text-xl font-light px-8">
                            Donations to Titanium Robotics can range from food to money.  Most of our income comes from sponsors who we reach out to every year, but most of the more useful donations, from food to custom made parts to simple tools come from parents and friends of Titanium Robotics.  Below is our ever-evolving donation levels and the perquisites associated with them. As we are always trying to improve our donation structure, please email us anything concerning donations.
                        </span>
                        <div className="flex justify-center opacity-100">
                            <Link href="mailto:titaniumrobotics@gmail.com?subject=Donating To Titanium" className="p-3 border-5 border-blue-500 transition-colors ease-in-out duration-300 font-bold text-2xl text-blue-500 hover:border-blue-400 hover:text-blue-400">Email Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
