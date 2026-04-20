import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return (
    <main className="text-center md:text-left">
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
                        <Image src="/mentors/scottbarton.jpg" width={410} height={615} loading="eager" alt="Mr. Scott Barton"></Image>
                    </div>
                    <div className="flex flex-col md:basis-3/4 items-center px-8 space-y-5">
                        <span className="text-5xl font-light flex flex-col space-y-1">
                            Mr. Scott Barton - Head Mentor
                        </span>
                        <span className="text-xl flex flex-col text-center font-light space-y-2">
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Years on the team :</b>&nbsp;19 years</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Specialty :</b>&nbsp;mechanical engineering & marketing</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Current Occupation :</b>&nbsp;Teacher & Advisor</span>
                        </span>
                        <span className="text-xl font-light">
                            Mr. Scott Barton teaches AP Physics at San Marino High School and has been mentoring the Titanium Robotics Team for years. His main job is making sure that “the students leave with the same amount of fingers they came in with”. During building sessions, he can be found at his desk in the robo room, supervising the kids and giving them advice when necessary, about both engineering and life in general. He is the cornerstone of the team and our head advisor, so he has his own spirit animal: the Sloth.
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-col space-y-7 md:space-y-0 md:flex-row-reverse flex-wrap justify-center">
                    <div className="flex flex-col md:basis-1/4 items-center justify-center space-y-5">
                        <Image src="/mentors/wesleysu.jpg" width={410} height={615} loading="eager" alt="Wesley Su"></Image>
                    </div>
                    <div className="flex flex-col md:basis-3/4 items-center space-y-5 px-8">
                        <span className="text-5xl font-light flex flex-col space-y-1">
                            Wesley Su - Alumni Mentor
                        </span>
                        <span className="text-xl flex flex-col text-center font-light space-y-2">
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Years on the team :</b>&nbsp;3 years</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Specialty :</b>&nbsp;structural engineering & electrical</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Current Occupation :</b>&nbsp;Structural Engineer</span>
                        </span>
                        <span className="text-xl font-light">
                            biz gotta make a fancy summary. 
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-col space-y-7 md:space-y-0 md:flex-row flex-wrap justify-center">
                    <div className="flex flex-col md:basis-1/4 items-center justify-center space-y-5">
                        <Image src="/mentors/shawntsai.jpg" width={410} height={615} loading="eager" alt="Shawn Tsai"></Image>
                    </div>
                    <div className="flex flex-col md:basis-3/4 items-center space-y-5 px-8">
                        <span className="text-5xl font-light flex flex-col space-y-1">
                            Shawn Thai - Alumni Mentor
                        </span>
                        <span className="text-xl flex flex-col text-center font-light space-y-2">
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Years on the team :</b>&nbsp;4 years</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Specialty :</b>&nbsp;electronics & design</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Current Occupation :</b>&nbsp;Digital & Electronics Design Engineer</span>
                        </span>
                        <span className="text-xl font-light">
                            biz gotta make a fancy summary. 
                        </span>
                    </div>
                    
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-col space-y-7 md:space-y-0 md:flex-row-reverse flex-wrap justify-center">
                    <div className="flex flex-col md:basis-1/4 items-center justify-center space-y-5">
                        <Image src="/mentors/nathanlee.jpg" width={410} height={615} loading="eager" alt="Nathan Lee"></Image>
                    </div>
                    <div className="flex flex-col md:basis-3/4 items-center space-y-5 px-8">
                        <span className="text-5xl font-light flex flex-col space-y-1">
                            Nathan Lee - Alumni Mentor
                        </span>
                        <span className="text-xl flex flex-col text-center font-light space-y-2">
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Years on the team :</b>&nbsp;1 years</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Specialty :</b>&nbsp;mechanical design & programming</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Current Occupation :</b>&nbsp;RnD Engineer & Software Developer</span>
                        </span>
                        <span className="text-xl font-light">
                            biz gotta make a summary. 
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-col space-y-7 md:space-y-0 md:flex-row flex-wrap justify-center">
                    <div className="flex flex-col md:basis-1/4 items-center justify-center space-y-5">
                        <Image src="/mentors/teowilkening.jpg" width={410} height={615} loading="eager" alt="Teo Wilkening"></Image>
                    </div>
                    <div className="flex flex-col md:basis-3/4 items-center space-y-5 px-8">
                        <span className="text-5xl font-light flex flex-col space-y-1">
                            Teo Wilkening - Alumni Mentor
                        </span>
                        <span className="text-xl flex flex-col text-center font-light space-y-2">
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Years on the team :</b>&nbsp;1 years</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Specialty :</b>&nbsp;mechanical engineering & controls</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Current Occupation :</b>&nbsp;Senior Controls & Automation Engineer</span>
                        </span>
                        <span className="text-xl font-light">
                            biz gotta make a summary. 
                        </span>
                    </div>
                    
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-col space-y-7 md:space-y-0 md:flex-row-reverse flex-wrap justify-center">
                    <div className="flex flex-col md:basis-1/4 items-center justify-center space-y-5">
                        <Image src="/mentors/bensonkhau.jpg" width={410} height={615} loading="eager" alt="Benson Khau"></Image>
                    </div>
                    <div className="flex flex-col md:basis-3/4 items-center space-y-5 px-8">
                        <span className="text-5xl font-light flex flex-col space-y-1">
                            Benson Khau - Alumni Mentor
                        </span>
                        <span className="text-xl flex flex-col text-center font-light space-y-2">
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Years on the team :</b>&nbsp;1 years</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Specialty :</b>&nbsp;programming</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Current Occupation :</b>&nbsp;Senior Software Engineer</span>
                        </span>
                        <span className="text-xl font-light">
                            Benson is a San Marino High School alum from the class of 2008 and was a member of the robotics club during Scott Barton's first year as head mentor. He discovered his love of programming through FIRST, which was a fundamental first step on his current career path as a software engineer. As a mentor of Team 1160, Benson is excited to share his experience and help the team take their programming to the next level.
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-col space-y-7 md:space-y-0 md:flex-row flex-wrap justify-center">
                    <div className="flex flex-col md:basis-1/4 items-center justify-center space-y-5">
                        <Image src="/mentors/tylerhand.jpg" width={410} height={615} loading="eager" alt="Tyler Hand"></Image>
                    </div>
                    <div className="flex flex-col md:basis-3/4 items-center space-y-5 px-8">
                        <span className="text-5xl font-light flex flex-col space-y-1">
                            Tyler Hand - Mentor
                        </span>
                        <span className="text-xl flex flex-col text-center font-light space-y-2">
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Years on the team :</b>&nbsp;1 years</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Specialty :</b>&nbsp;mechanical design & programming</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Current Occupation :</b>&nbsp;RnD Engineer & Software Developer</span>
                        </span>
                        <span className="text-xl font-light">
                            biz gotta make a summary. 
                        </span>
                    </div>
                    
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-col space-y-7 md:space-y-0 md:flex-row-reverse flex-wrap justify-center">
                    <div className="flex flex-col md:basis-1/4 items-center justify-center space-y-5">
                        <Image src="/mentors/teribond.jpg" width={410} height={615} loading="eager" alt="Teri Bond"></Image>
                    </div>
                    <div className="flex flex-col md:basis-3/4 items-center space-y-5 px-8">
                        <span className="text-5xl font-light flex flex-col space-y-1">
                            Teri Bond - Mentor
                        </span>
                        <span className="text-xl flex flex-col text-center font-light space-y-2">
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Years on the team :</b>&nbsp;2 years</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Specialty :</b>&nbsp;public relations & marketing</span>
                            <span className="flex flex-row flex-wrap justify-center items-center"><b>Current Occupation :</b>&nbsp;Public Relations Consultant</span>
                        </span>
                        <span className="text-xl font-light hidden">
                            biz gotta make a summary. 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
