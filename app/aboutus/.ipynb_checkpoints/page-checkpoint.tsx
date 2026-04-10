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
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="flex flex-col md:basis-3/4 items-center space-y-5">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            Our Team
                        </span>
                        <span className="text-xl font-light px-8">
                            Titanium Robotics is a team consisting of approximately 50 students.  Although most members come from San Marino High School, there are members from other schools who share a common interest in science, technology, engineering, and mathematics. Robotics gives students the opportunity to work with professional engineers from companies such as Boeing and JPL, who have volunteered to be mentors to the team.  Members not only learn to work with intricate machinery, but also learn to design and build a robot by hand. Programming is also an extremely important part of robotics that can be learned.  If mechanical or programming work does not interest prospective members, one can always work on the business side to the Titanium Robotics experience. Titanium Robotics offers a wonderful experience for everyone.
                        </span>
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
        </div>
    </main>
  );
}
