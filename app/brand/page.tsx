import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return (
    <main>
        <div id="cards" className="pt-30 relative text-black w-full flex flex-col opacity-85 bg-white">
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row justify-center flex-wrap">
                    <div className="flex flex-col items-center space-y-5">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Our Brand
                        </span>
                        <span className="text-xl font-light px-8">
                            lil description of our brand, idk have chatgpt do it?? or a business slave.
                        </span>
                        <div className="relative w-full h-0 overflow-hidden pt-[77.284050%] mt-[1.6em] mb-[0.9em] bg-white">
                          <iframe loading="eager" className="absolute top-0 left-0 w-full h-full border-none bg-white m-0"
                            src="https://www.canva.com/design/DAGgt8cX3Js/C4Htnz0lk4dnWK0-i8YSGQ/view?embed" allowFullScreen={true} allow="fullscreen">
                          </iframe>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
