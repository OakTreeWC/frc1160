import Image from "next/image";
import Link from 'next/link';
import { getPublicPhoto } from '@/app/lib/data';

// Add CTAs like how to contact us and how to support us.

export default async function Page() {
    const aboutus_bg = await getPublicPhoto('aboutus/bg') || "/team/parade.jpg";
    const aboutus_team = await getPublicPhoto('aboutus/team') || "/team/parade.jpg";
  return (
    <main className="text-center md:text-left">
        <div className="z-0 w-full h-[50vh] block relative" >
            <Image src={aboutus_bg} height={"1330"} width={"2000"} loading="eager" alt="hero photo" className="object-cover w-full mt-0 top-0 h-full overflow-hidden bg-center md:fixed filter brightness-75 block absolute" />
        </div>
        <div id="cards" className="relative text-black w-full flex flex-1 flex-col bg-white/85">  
            <div className="pb-19 md:py-19 px-10 md:px-45 w-full">
                <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-center flex-wrap">
                    <div className="flex flex-col md:basis-1/5 items-center justify-center text-center space-y-3 font-light text-xl pt-10 md:pt-0">
                        <div className="flex flex-col space-y-1">
                            <span className="font-medium">ROOKIE YEAR</span>
                            <span>2003</span>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span className="font-medium">LOCATION</span>
                            <span>San Marino, California</span>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span className="font-medium">SCHOOL AFFILIATION</span>
                            <Link href="https://www.sanmarinohs.org" className="text-blue-500 underline">San Marino High School</Link>
                        </div>
                        <Link href="/contactus" className="mt-5 p-3 border-5 border-blue-500 transition-colors ease-in-out duration-300 font-bold text-3xl text-blue-500 hover:border-blue-400 hover:text-blue-400">Contact Us</Link>
                    </div>
                    <div className="flex flex-col md:basis-4/5 items-center space-y-5">
                        <h1 className="text-6xl font-light flex flex-col space-y-1">
                            About Titanium
                        </h1>
                        <span className="text-xl font-light px-8">
                            Titanium Robotics, in its 20+ years of existence, has been and continues to be committed to the creation of opportunities and inspiration to pursue STEAM for everyone and anyone. We work to provide a creative, innovative, spirited environment that teaches and promotes Science, Technology, Engineering, Art, and Mathematics in unique and engaging ways that a traditional classroom cannot. Our mission is to spread FIRST® values as well as STEAM to the younger generation in tandem with our belief that STEAM is for everyone.
                        </span>
                        <span className="text-xl font-light px-8">
                            In 2003, NASA engineer Dr. Jeng Yen founded our team and since then, anyone interested in joining the team has been welcomed, no matter their experience. Additionally, as a completely student-led organization, we rely on our <Link href="/cabinet/engineering" className="text-blue-500 underline font-normal">cabinet</Link> of solely members to run the team. Whether it be marketing an event or building a test board, student leadership is the core of the team’s success. Through this process, students also produce materials such as videos and guides that build a cycle of knowledge, allowing us to retain skills for the following years. As such, our students gain skills in how to learn, teach, lead, and push themselves to be the best both within and outside of the robotics room.
                        </span>
                        <span className="text-xl font-light px-8">
                            After years of solidifying our presence and constructing a strong foundation for outreach, Team 1160 has become an important part of not only our school, but also our entire community. Our influence continuously transcends our campus grounds as we guide our community members, sponsors, and local newspaper outlets through each and every FRC season.
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row flex-wrap justify-center items-center">
                    <div className="flex flex-col md:basis-3/4 items-center space-y-5">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Our Team
                        </span>
                        <div className="flex flex-col text-center justify-center space-y-1">
                            <span className="text-4xl font-light px-8">
                                Feelings are important, but it's the Physics that matters.
                            </span>
                            <span className="text-2xl font-normal">- Team Motto</span>
                        </div>
                        <span className="text-xl font-light px-8">
                            Titanium Robotics is a team consisting of approximately 50 students.  Although most members come from San Marino High School, there are members from other schools who share a common interest in science, technology, engineering, and mathematics. Robotics gives students the opportunity to work with professional engineers from companies such as Boeing and JPL, who have volunteered to be <Link href="/mentors" className="text-blue-500 underline font-normal">mentors</Link> to the team.  Members not only learn to work with intricate machinery, but also learn to design and build a robot by hand. Programming is also an extremely important part of robotics that can be learned.  If mechanical or programming work does not interest prospective members, one can always work on the business side to the Titanium Robotics experience. Titanium Robotics offers a wonderful experience for everyone.
                        </span>
                    </div>
                    <div className="flex flex-col md:basis-1/4 items-center space-y-3">
                        <Image src={aboutus_team} width={800} height={600} alt="Team Picture" />
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="flex flex-col items-center space-y-5">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Our History
                        </span>
                        <span className="text-xl font-light px-8">
                            Our team was founded in 2003 by Dr. Jeng Yen.  Four years after our team was founded, our present advisor and mentor, San Marino High School teacher Scott Barton, came forward to lead the team. Following the ideals of these two mentors, the team has always emphasized a student, not mentor, led workforce which equates to a unique experience not found anywhere else in San Marino.
                        </span>
                        <span className="text-xl font-light px-8">
                            Beginning as team “Titanium,” the team competed every year in the FIRST Robotics Competition. A few years later, we decided to change our image and thus became “Firebird Robotics.” After a couple years as “Firebird Robotics”, we have officially reinstated ourselves as “Titanium Robotics”.
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row justify-center flex-wrap">
                    <div className="flex flex-col items-center w-200 space-y-5">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Our Brand
                        </span>
                        <div className="relative w-full h-0 overflow-hidden pt-[77.284050%] mt-[1.6em] mb-[0.9em] bg-white">
                          <iframe loading="eager" className="absolute top-0 left-0 w-full h-full border-none bg-white m-0"
                            src="https://www.canva.com/design/DAGgt8cX3Js/C4Htnz0lk4dnWK0-i8YSGQ/view?embed" allowFullScreen={true} allow="fullscreen">
                          </iframe>
                        </div>
                        
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="flex flex-col items-center space-y-8">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Our Timeline
                        </span>
                        <span className="text-2xl font-light px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium list-disc">2003</span>
                            <span className="grow">
                                Titanium Robotics was founded by Dr. Jeng
                                Yen, an employee at JPL, under the
                                mentorship of Mr. Wyeth Collo, a biology
                                teacher at San Marino High School.
                                Originally called Team Titanium, we worked
                                out of a 4x4 shed in a member’s back yard.
                            </span>
                            <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-055.png" width={300} height={300} className="border-5 border-blue-500" alt="Wooden Shed" />
                        </span>
                        <span className="text-2xl font-light px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium list-disc">2005</span>
                            <span className="grow">
                                Team Titanium relocated into a
                                trailer at Huntington Middle
                                School, which better suited the
                                team’s needs.
                            </span>
                            <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-056.png" width={360} height={160} className="border-5 border-blue-500" alt="Portable Classroom at HMS" />
                        </span>
                        <span className="text-2xl font-light px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium">2007</span>
                            <span className="grow flex flex-col space-y-7">
                                <span>Mr. Scott Barton, a physics teacher at San Marino High School, takes over as lead mentor for Team Titanium. With experience in both business and engineering, he transformed the team into what it is now. He continues to serve as head mentor for the team. Under his guidance, Team Titaium transformed into Firebird Robotics.</span>
                                <span>After buying many tools for our team and filling a then-vacant driver's ED classroom with them, the team officially got a dedicated workshop at San Marino High School to operate out of. Afterwards, we were provided with more tools from JPL mentor Mr. French and Boeing.</span>
                            </span>
                            <div className="flex flex-col h-full justify-center">
                                <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-052.png" width={512} height={380.4770643} className="border-5 border-b-0 border-blue-500" alt="Firebird Robotics Logo" />
                                <Image hidden src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-054.jpg" width={512} height={341} className="border-5 border-blue-500 flex-1" alt="Mr. Scott Barton" />
                                <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-060.png" width={480} height={240} className="border-5 border-t-0 border-blue-500" alt="Team Members Working" />
                            </div>
                        </span>
                        <span className="text-2xl font-light px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium list-disc">2010</span>
                            <span className="grow">
                                B-roll videos of the team's robots were created and sent to all Los Angeles television stations. <span hidden>Furthermore, the face of a car was found on the side of a freeway. Named Brad, it remains in the robotics room.</span>
                            </span>
                            <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-054.jpg" width={300} height={256.5000001} className="border-5 border-blue-500" alt="Not Brad" />
                        </span>
                        <span className="text-2xl font-light px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium list-disc">2012</span>
                            <span className="md:basis-13/20 flex flex-col space-y-7">
                                Feeling disconnected with our school and community and wanting a more modern and professional identity, we combined Team Titanium and Firebird Robotics to rebrand into Titanium Robotics
                            </span>
                            <div className="flex flex-col justify-center items-end flex-1">
                                <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-058.png" width={443} height={209} className="border-5 border-b-0 border-blue-500 flex-1" alt="Titanium Robotics Logo but with a Firebird" />
                                <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-057.png" width={435} height={272} className="border-5 border-blue-500 flex-1" alt="trash can" />
                            </div>
                        </span>
                        <span className="text-2xl font-light px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium list-disc">2014</span>
                            <span className="grow">
                                Using our high school's advanced drama students as actors, a 30 second television commercial was shot by the team and played as a PSA.
                            </span>
                            <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-061.jpg" width={807} height={605} className="border-5 border-blue-500 object-fit" alt="PSA Commercial" />
                        </span>
                        <span className="text-2xl font-light px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium list-disc">2017</span>
                            <span className="grow">
                                To bring awareness towards breast cancer,
                                Titanium Robotics began the tradition of
                                rebranding to pink every October. Through
                                handing out pink ribbons and hosting a
                                mural signing, we aim to bring awareness
                                for breast cancer every year.
                            </span>
                            <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-064.png" width={258} height={343} className="border-5 border-blue-500" alt="Team Members Painting a Pinktober Poster" />
                        </span>
                        <span className="text-2xl font-light px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium list-disc">2025</span>
                            <span className="grow px-2">
                                We continue to operate as a student-led robotics
                                team open to any student interested. Our team
                                consists of 30+ active members and a cabinet of
                                21 people, ~25% of which are female. Our impact
                                in our community and beyond is deep as we host
                                numerous events to further our mission of
                                spreading STEAM to everyone.
                            </span>
                            <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-062.png" width={161} height={359} className="" alt="Titanium Robotics Sword" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
