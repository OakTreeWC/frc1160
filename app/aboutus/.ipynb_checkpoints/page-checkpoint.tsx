import Image from "next/image";
import Link from 'next/link';

export default function Page() {
  return (
    <main className="text-center md:text-left">
        <div id="cards" className="pt-30 relative text-black w-full flex flex-col opacity-85 bg-white">
            <div className="pb-19 md:py-19 px-10 md:px-45 w-full">
                <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-center flex-wrap">
                    <div className="flex flex-col md:basis-1/4 items-center justify-center text-center space-y-3 font-light text-xl pt-10 md:pt-0">
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
                    </div>
                    <div className="flex flex-col md:basis-3/4 items-center space-y-5">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Our Mission
                        </span>
                        <span className="text-xl font-light px-8">
                            Titanium Robotics’s mission stays true to FIRST®’s ideals; our mission is: to encourage young people, especially students, to become advanced in the fields of science and technology by providing engaging and inspirational activities that promote the exploration of science, technology, engineering, and mathematics education (STEM Education) in a way that a normal classroom environment cannot.
                        </span>
                        <span className="text-xl font-light px-8">
                            Students on Team 1160 work together with adult mentors to pursue a common goal: creating a robot that will compete in the changing annual competition outlined by FIRST®.
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
                        <span className="text-xl font-light px-8">
                            Titanium Robotics is a team consisting of approximately 50 students.  Although most members come from San Marino High School, there are members from other schools who share a common interest in science, technology, engineering, and mathematics. Robotics gives students the opportunity to work with professional engineers from companies such as Boeing and JPL, who have volunteered to be mentors to the team.  Members not only learn to work with intricate machinery, but also learn to design and build a robot by hand. Programming is also an extremely important part of robotics that can be learned.  If mechanical or programming work does not interest prospective members, one can always work on the business side to the Titanium Robotics experience. Titanium Robotics offers a wonderful experience for everyone.
                        </span>
                    </div>
                    <div className="flex flex-col md:basis-1/4 items-center space-y-3">
                        <Image src="/team/parade.jpg" width={1143} height={857} alt="Team 1160 After July 4th Parade" />
                        <span className="font-light text-s italic text-gray-400">Team 1160 After July 4th Parade</span>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-gray-400 mx-25 rounded-xl" />
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="flex flex-col md:basis-3/4 items-center space-y-5">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Our History
                        </span>
                        <span className="text-xl font-light px-8">
                            Our team was founded in 2003 by Dr. Jeng Yen.  Four years after our team was founded, our present advisor and mentor, San Marino High School teacher Scott Barton, came forward to lead the team. Following the ideals of these two mentors, the team has always emphasized a student, not mentor, led workforce which equates to a unique experience not found anywhere else in San Marino.
                        </span>
                        <span className="text-xl font-light px-8">
                            Beginning as team “Titanium,” the team competed every year in the FIRST Robotics Competition, an annual competition where teams from across the world have 6 weeks to build a functioning robot to compete in a game that differs from year to year.  A few years later, we decided to change our image and thus became “Firebird Robotics.” After a couple years as “Firebird Robotics”, we have officially reinstated ourselves as “Titanium Robotics”.
                        </span>
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
                        <span className="text-2xl font-normal px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium list-disc">2003</span>
                            <span>
                                Titanium Robotics was founded by Dr. Jeng
                                Yen, an employee at JPL, under the
                                mentorship of Mr. Wyeth Collo, a biology
                                teacher at San Marino High School.
                                Originally called Team Titanium, we worked
                                out of a 4x4 shed in a member’s back yard.
                            </span>
                            <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-055.png" width={300} height={300} className="border-5 border-blue-500" alt="Wooden Shed" />
                        </span>
                        <span className="text-2xl font-normal px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium list-disc">2005</span>
                            <span>
                                Team Titanium relocated into a
                                trailer at Huntington Middle
                                School, which better suited the
                                team’s needs.
                            </span>
                            <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-056.png" width={360} height={160} className="border-5 border-blue-500" alt="Portable Classroom at HMS" />
                        </span>
                        <span className="text-2xl font-normal px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium">2007</span>
                            <span className="flex flex-col space-y-7">
                                <span>Mr. Scott Barton, a physics teacher at San Marino High School, takes over as lead mentor for Team Titanium. With experience in both business and engineering, he transformed the team into what it is now. He continues to serve as head mentor for the team. Under his guidance, Team Titaium transformed into Firebird Robotics.</span>
                                <span>After buying many tools for our team and filling a then-vacant driver's ED classroom with them, the team officially got a dedicated workshop at San Marino High School to operate out of. Afterwards, we were provided with more tools from JPL mentor Mr. French and Boeing.</span>
                            </span>
                            <div className="flex flex-col h-full">
                                <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-052.png" width={512} height={380.4770643} className="border-5 border-b-0 border-blue-500 flex-1" alt="Firebird Robotics Logo" />
                                <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-054.jpg" width={512} height={341} className="border-5 border-blue-500 flex-1" alt="Mr. Scott Barton" />
                                <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-060.png" width={480} height={240} className="border-5 border-t-0 border-blue-500" alt="Team Members Working" />
                            </div>
                        </span>
                        <span className="text-2xl font-normal px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium list-disc">2010</span>
                            <span className="md:basis-13/20">
                                B-roll videos of the team's robots were created and sent to all Los Angeles television stations. Furthermore, the face of a car was found on the side of a freeway. Named Brad, it remains in the robotics room.
                            </span>
                            <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-059.jpg" width={300} height={256.5000001} className="border-5 border-blue-500" alt="Brad" />
                        </span>
                        <span className="text-2xl font-normal px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium list-disc">2012</span>
                            <span className="md:basis-13/20 flex flex-col space-y-7">
                                Feeling disconnected with our school and community and wanting a more modern and professional identity, we combined Team Titanium and Firebird Robotics to rebrand into Titanium Robotics
                            </span>
                            <div className="flex flex-col flex-1">
                                <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-058.png" width={443} height={209} className="border-5 border-b-0 border-blue-500 flex-1" alt="Titanium Robotics Logo but with a Firebird" />
                                <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-057.png" width={435} height={272} className="border-5 border-blue-500 flex-1" alt="trash can" />
                            </div>
                        </span>
                        <span className="text-2xl font-normal px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium list-disc">2014</span>
                            <span className="md:basis-13/20">
                                Using our high school's advanced drama students as actors, a 30 second television commercial was shot by the team and played as a PSA.
                            </span>
                            <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-061.jpg" width={807} height={605} className="border-5 border-blue-500 object-fit" alt="PSA Commercial" />
                        </span>
                        <span className="text-2xl font-normal px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium list-disc">2017</span>
                            <span className="md:basis-13/20">
                                To bring awareness towards breast cancer,
                                Titanium Robotics began the tradition of
                                rebranding to pink every October. Through
                                handing out pink ribbons and hosting a
                                mural signing, we aim to bring awareness
                                for breast cancer every year.
                            </span>
                            <Image src="/timeline/Titanium Robotics Sponsorship Packet.pdf-image-064.png" width={258} height={343} className="border-5 border-blue-500" alt="Team Members Painting a Pinktober Poster" />
                        </span>
                        <span className="text-2xl font-normal px-8 w-full flex flex-col md:flex-row justify-between md:space-x-10 items-center space-y-5 md:space-y-0">
                            <span className="text-4xl font-medium list-disc">2025</span>
                            <span className="md:basis-13/20 px-2">
                                We continue to operate as a student-led robotics
                                team open to any student interested. Our team
                                consists of 30+ active members and a cabinet of
                                20 people, 25% of which are female. Our impact
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
