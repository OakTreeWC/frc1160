import Image from "next/image";
import Link from 'next/link';
import { getSponsors } from '@/app/lib/data';

export default async function Page() {
  let sponsors = await getSponsors();

  const files = ['1boeing.svg','2northropgrumman.png','3nasa.svg','4rgsport.webp','5disney-employee-matching-gifts.webp']
  const path = require("path");
  const images = files.filter((file: string) => {
    return ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'].includes(path.extname(file).toLowerCase());
  });

  return (
    <main className="text-center md:text-left">
        
        <div className="z-0 w-full md:h-screen block" >
            <Image src="/homepage/homepage.jpg" height={"1330"} width={"2000"} loading="eager" alt="hero photo" className="object-scale-down md:object-cover w-full mt-25 md:mt-0 md:top-0 md:h-full overflow-hidden bg-center md:fixed filter brightness-80 block" />
        </div>
        <div id="cards" className="pt-10 md:pt-0 relative top-0 md:top-full text-black w-full flex flex-col opacity-100 bg-white/85">
            <div className="md:py-20 px-10 md:px-[10vw] w-full">
                <div className="flex flex-col space-y-3 md:flex-row md:space-y-8 flex-wrap justify-center items-start">
                    <div className="flex flex-col md:basis-1/2 items-center space-y-5 pr-5">
                        <Image src="/homepage/FIRST.svg" width={150} height={150} alt="FIRST Logo" />
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            <span>
                                Team 1160 is a FIRST® FRC Team
                            </span>
                            
                            <span className="text-3xl font-normal">
                                What is FIRST® and what do they do?
                            </span>
                        </span>
                        <span className="text-xl font-light">
                            <b>FIRST stands for For Inspiration and Recognition of Science and Technology.</b> Accomplished inventor Dean Kamen founded FIRST® in 1989 to inspire appreciation of science and technology in young people. FIRST® inspires people young and old to learn through robotics.
                            <br />
                            <span className="relative top-1">
                                <b>FRC</b>, the league that Titanium Robotics competes in, is the High School level robotics league and stands for <b>FIRST Robotics Competition</b>
                            </span>
                            <br />
                            <span className="relative top-3">
                                Learn more about FIRST®, at&nbsp;
                                <Link href="https://www.firstinspires.org/about" className="text-blue-500 underline font-medium" >
                                    www.firstinspires.org/about
                                </Link>
                            </span>
                            
                        </span>
                    </div>
                    <div className="flex flex-col md:basis-1/2 items-center space-y-5 py-20 md:pt-0">
                        <Image src="/homepage/location-dot-solid.svg" width={100} height={110} alt="Location Pin" />
                        <span className="text-6xl font-light">
                            Team 1160 is located in San Marino, CA.
                        </span>
                        <span className="text-xl font-light">
                            Our team is located in San Marino, California and is a part of San Marino High School. We work with teachers and students along with professionals around the area to provide a high quality STEM (and FIRST ®) experience.
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-20 px-10 md:px-45 w-full">
                <div className="flex flex-col w-full md:w-auto md:flex-row flex-wrap">
                    <span className="md:basis-1/2 items-center">
                        <Image src="/homepage/yippee.jpg" width={1000} height={665} alt="yippe" />
                    </span>
                    <div className="md:basis-1/2 md:pl-7 pt-4 md:pt-0 text-xl font-light">
                        Titanium Robotics is an FRC team with roughly 50 members, mostly from San Marino High School in San Marino, CA, although some members are from surrounding schools and areas such as South Pasadena and Arcadia.
                        <br />
                        <span className="relative top-2">
                            Team 1160 provides a place in the normal school environment for students to learn how to apply their skills in in Science, Technology, Engineering, and Mathematics. We're a group of students and mentors whose main goal is to provide the world with the next generation of STEM leaders.
                        </span>
                        <div className="flex justify-center mt-10 opacity-100">
                            <Link href="/aboutus" className="p-3 border-5 border-blue-500 transition-colors ease-in-out duration-300 font-bold text-3xl text-blue-500 hover:border-blue-400 hover:text-blue-400">About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-20 px-10 md:px-45 w-full">
                <div className="flex flex-col items-center">
                    <span className="items-center text-5xl font-light pb-6 text-center">Titanium Sponsors</span>
                    <div className="items-center font-light items-stretch">
                        <div className="flex flex-col md:flex-row flex-wrap pt-8 md:p-8 md:space-x-8 space-y-8 justify-center items-center">
                            {
                                images.map((image: string) => {
                                    return (
                                      <Image
                                        key={image}
                                        src={`/sponsors/${image}`}
                                        width={300}
                                        height={150}
                                        alt={image}
                                        className="object-contain"
                                      />
);
                                })
                            }
                        </div>
                        <div className="text-2xl font-normal flex flex-col space-y-5 pt-10 text-center">
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
