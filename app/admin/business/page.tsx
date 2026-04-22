import Image from "next/image";
import Link from 'next/link';

export default async function Page() {
  return (
    <main className="text-center md:text-left h-screen ">
        <div id="cards" className="pt-55 h-full relative text-black w-full flex flex-col opacity-85 bg-white">
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row justify-center flex-wrap">
                    <div className="flex flex-col items-center space-y-5">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Admin Dashboard
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
        </div>
    </main>
  );
}
