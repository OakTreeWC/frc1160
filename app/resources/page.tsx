import Image from "next/image";
import Link from 'next/link';
import { getResources } from '@/app/lib/data';

export default async function Page() {
    const resources = await getResources();
  return (
    <>
        <div id="cards" className="relative text-black w-full flex flex-1 flex-col opacity-85 bg-white">
            <div className="py-19 px-10 md:px-45 w-full">
                    <div className="flex flex-row justify-center flex-wrap">
                        <div className="flex flex-col items-center space-y-5 px-8 text-center">
                            <span className="text-6xl font-light flex flex-col space-y-2">
                                Resources
                            </span>
                        </div>
                    </div>
                </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="flex flex-col items-center space-y-7">
                        {
                            resources.map((resource) => (
                                <div key={resource.id} className="flex justify-center opacity-100">
                                    <Link href={resource.url} className="p-3 border-5 border-blue-500 transition-colors ease-in-out duration-300 font-bold text-2xl text-blue-500 hover:border-blue-400 hover:text-blue-400">{resource.name}</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
