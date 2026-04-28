import { auth } from '@/auth';
import { getRobots } from '@/app/lib/data';
import { revalidatePath } from 'next/cache';
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
                        Users
                    </span>
                </div>
            </div>
        </div>

        <hr className="border-2 border-gray-400 mx-10 rounded-xl" />

        {/* Sponsors List */}
        <div className="py-10 mt-10 mx-2 md:mx-20 flex justify-center items-center bg-gray-300 rounded-lg">
          {//robots.length? === 0 
             true ? (
            <p className="text-center">No robots yet.</p>
          ) : (
            <div className="w-full">
              {/* Data Rows */}
              <div className="flex flex-col gap-2">
               
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}