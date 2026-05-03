import { auth } from '@/auth';
import { getUsers, removeUser } from '@/app/lib/data';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';

export default async function Page() {
  const sponsors = await getUsers();

  async function deleteCabinet(formData: FormData) {
    'use server';

    const session = await auth();
    if (!session?.user) {
      throw new Error('Unauthorized');
      return
    }

    const image = formData.get("image") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    if (!image || !name || !email) return;

    await removeUser(image, name, email);

    revalidatePath('/admin/users');
  }

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
          {sponsors.length === 0 ? (
            <p className="text-center">No Users yet. How are you here?</p>
          ) : (
            <div className="w-full">
              {/* Data Rows */}
              <div className="flex flex-col gap-2">
                {sponsors.map((sponsor: any) => (
                  <div
                    key={
                      sponsor.image
                    }
                    className="grid grid-cols-10 items-center text-center bg-gray-200 rounded p-2 mx-2"
                  >
                    <Image src={sponsor.image} height={96} width={96} className="h-10 w-10 rounded-full col-span-1" alt={sponsor.name+" google profile picture"} />
                    <div className="col-span-1">{sponsor.role.toUpperCase()}</div>
                    <div className="col-span-1">{sponsor.name}</div>
                    <div className="col-span-6">{sponsor.email}</div>
        
                    <div className="col-span-1 flex justify-center items-center">
                      <form action={deleteCabinet}>
                        <input type="hidden" name="image" value={sponsor.image} />
                        <input type="hidden" name="name" value={sponsor.name} />
                        <input type="hidden" name="email" value={sponsor.email} />
        
                        <button type="submit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="h-8 w-8 p-2 hover:cursor-pointer hover:fill-white transition hover:bg-red-500/50 duration-300 ease-out rounded-xl"
                          >
                            <path d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-32-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"/>
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}