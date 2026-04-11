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
                            Our Mentors
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-col space-y-7 md:space-y-0 md:flex-row flex-wrap justify-center">
                    <div className="flex flex-col md:basis-1/4 items-center justify-center space-y-5">
                        <Image src="/mentors/scottbarton.jpg" width={4526} height={3017} loading="eager" alt="Mr. Scott Barton"></Image>
                    </div>
                    <div className="flex flex-col md:basis-3/4 items-center px-8 space-y-5">
                        <span className="text-5xl font-light flex flex-col space-y-1">
                            Mr. Scott Barton - San Marino High School
                        </span>
                        <span className="text-xl font-light">
                            Mr. Scott Barton teaches AP Physics at San Marino High School and has been mentoring the Titanium Robotics Team for years. His main job is making sure that “the students leave with the same amount of fingers they came in with”. During building sessions, he can be found at his desk in the robo room, supervising the kids and giving them advice when necessary, about both engineering and life in general. He is the cornerstone of the team and our head adviser, so he has his own spirit animal: the Sloth.
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="flex flex-col md:basis-3/4 items-center space-y-5 px-8">
                        <span className="text-5xl font-light flex flex-col space-y-1">
                            Mr. Robert French – The Boeing Company
                        </span>
                        <span className="text-xl font-light">
                            Mr. Robert French works with composites at Boeing. His generosity, skills, and humor make him an essential part of the team and his invaluable contributions have helped the team improve exponentially to what it is today. As a thank you to Mr. French, as well as The Boeing Company, every year, we bring our robot to Boeing’s Family Day, teaching the kids more about engineering and the ideals of FIRST Robotics. (Do they still do this?)
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="flex flex-col md:basis-3/4 items-center space-y-5 px-8">
                        <span className="text-5xl font-light flex flex-col space-y-1">
                            Mr. Wesley Su - i lwk dont know. san marino unified?
                        </span>
                        <span className="text-xl font-light">
                            biz gotta make mr su a fancy summary. 
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="flex flex-col md:basis-3/4 items-center space-y-5 px-8">
                        <span className="text-5xl font-light flex flex-col space-y-1">
                            Mr. Shawn Thai - is he also smusd?
                        </span>
                        <span className="text-xl font-light">
                            biz gotta make shawn a fancy summary. 
                        </span>
                    </div>
                    <div className="flex flex-col md:basis-1/4 items-center justify-center space-y-5">
                        <Image src="/mentors/shawnthai.jpg" width={4526} height={3017} loading="eager" alt="Mr. Scott Barton"></Image>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
