import { auth } from '@/auth';
import { getRobots } from '@/app/lib/data';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';

export default async function Page() {
  const robots = await getRobots();

  return (
    <main className="text-center md:text-left min-h-screen bg-white w-full">
      <div className="text-black w-full flex flex-col">
        
        <div className="py-19 px-10 md:px-45 w-full">
            <div className="flex flex-row justify-center flex-wrap">
                <div className="flex flex-col items-center space-y-5">
                    <span className="text-6xl font-light flex flex-col space-y-1">
                        Robots
                    </span>
                </div>
            </div>
        </div>

        <hr className="border-2 border-gray-400 mx-10 rounded-xl" />

        {/* Sponsors List */}
        <div className="py-10 mt-10 mx-2 md:mx-20 flex justify-center items-center bg-gray-300 rounded-lg">
          {robots.length === 0 ? (
            <p className="text-center">No robots yet.</p>
          ) : (
            <div className="w-full flex flex-col gap-2">
              {/* Data Rows */}
                  {
                      robots.map((robot: any) => {
                          return (
                              <div key={robot.slug} className="grid grid-cols-12 text-2xl font-normal text-center items-center justify-center pb-2 px-10 mb-2">
                                  <Image src={robot.photos.thumbnail} width={800} height={400} alt={robot.photos.thumbnail} className="col-span-2" />
                                  <span className="col-span-4">{robot.season}</span>
                                  <span className="col-span-4">{robot.name}</span>
                                  <div className="col-span-2 flex flex-row justify-center items-center space-x-2">
                                      <Link href={`/admin/robots/${robot.slug}`}>
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-12 w-12 p-3 hover:cursor-pointer hover:fill-white transition hover:bg-blue-500/40 duration-300 ease-out rounded-xl">{/* Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}<path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
                                      </Link>
                                      <Link href={`/robots/${robot.slug}`}>
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-12 w-12 p-3 hover:cursor-pointer hover:fill-white transition hover:bg-blue-500/40 duration-300 ease-out rounded-xl">{/* Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}<path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"/></svg>
                                      </Link>
                                  </div>
                              </div>
                          )
                      })
                  }
            </div>
          )}
        </div>
      </div>
    </main>
  );
}