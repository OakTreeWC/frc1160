import Image from "next/image";
import Link from "next/link";
import { getSponsors, getRealSponsors } from '@/app/lib/data';

export default async function Page() {
  const [sponsors, realsponsors] = await Promise.all([
    getSponsors(),
    getRealSponsors()
  ]);

  return (
    <main>
        <div id="cards" className="relative text-black w-full flex flex-1 flex-col opacity-85 bg-white">
            <div className="py-19 px-10 md:px-[10vw] w-full">
                <div className="flex flex-col items-center">
                    <h1 className="items-center text-6xl font-light pb-6 text-center">Titanium Sponsors</h1>
                    <div className="items-center font-light items-stretch">
                        <div className="flex flex-col md:flex-row flex-wrap pt-8 md:p-8 md:space-x-8 space-y-8 justify-center items-center">
                            {
                                realsponsors.map((sponsor: any) => {
                                    const base64Image = sponsor.image?.toString('base64');
                                    const dataUrl = `data:image/png;base64,${base64Image}`;
                                    return (
                                      <Image
                                        key={sponsor.name}
                                        src={dataUrl}
                                        width={300}
                                        height={150}
                                        alt={sponsor.name}
                                        className="object-contain"
                                      />
);
                                })
                            }
                        </div>
                        <div className="text-2xl font-normal flex flex-col pt-10 space-y-5 text-center">
                            {
                                sponsors.map((sponsor) => {
                                    return (<span key={sponsor.name}>{sponsor.name}</span>);
                                })
                            }
                        </div>   
                        <div className="flex justify-center mt-10 opacity-100">
                            <Link href="/donate" className="p-3 border-5 border-blue-500 transition-colors ease-in-out duration-300 font-bold text-3xl text-blue-500 hover:border-blue-400 hover:text-blue-400">Become a Sponsor</Link>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
