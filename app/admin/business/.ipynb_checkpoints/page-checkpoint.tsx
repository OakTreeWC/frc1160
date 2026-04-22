import { auth } from '@/auth';
import { getBusiness, createBusiness, removeBusiness } from '@/app/lib/data';
import { revalidatePath } from 'next/cache';

export default async function Page() {
  const sponsors = await getBusiness();

  async function createCabinet(formData: FormData) {
    'use server';

    const session = await auth();
    if (!session?.user) {
      throw new Error('Unauthorized');
    }

    const name = formData.get("name") as string;
    const position = formData.get("position") as string;
    const grade = formData.get("grade") as string;
    const years = formData.get("years") as string;

    if (!name || !position || !grade || !years) return;

    await createBusiness(name, position, grade, years);

    revalidatePath('/admin/business');
    revalidatePath('/cabinet/business');
  }

  async function deleteCabinet(formData: FormData) {
    'use server';

    const session = await auth();
    if (!session?.user) {
      throw new Error('Unauthorized');
    }

    const name = formData.get("name") as string;
    const position = formData.get("position") as string;
    const grade = formData.get("grade") as string;
    const years = formData.get("years") as string;

    if (!name || !position || !grade || !years) return;

    await removeBusiness(name,position,grade,years);

    revalidatePath('/admin/business');
    revalidatePath('/cabinet/business');
  }

  return (
    <main className="text-center md:text-left min-h-screen bg-white w-full">
      <div className="pt-55 text-black w-full flex flex-col">
        
        <div className="py-19 px-10 md:px-45 w-full">
            <div className="flex flex-row justify-center flex-wrap">
                <div className="flex flex-col items-center space-y-5">
                    <span className="text-6xl font-light flex flex-col space-y-1">
                        Business
                    </span>
                </div>
            </div>
        </div>

        <hr className="border-2 border-gray-400 mx-10 rounded-xl" />

        {/* Form */}
        <div className="py-10 px-6 md:px-20 flex justify-center">
          <div className="bg-gray-300 p-6 rounded-lg">
            <form
              action={createCabinet}
              className="flex flex-col lg:flex-row gap-4 items-center"
            >
              <input
                placeholder="Name"
                name="name"
                className="border-2 border-white p-2 rounded-lg"
                required
                autoFocus
              />
              <input
                placeholder="Position"
                name="position"
                className="border-2 border-white p-2 rounded-lg"
                required
              />
              <input
                placeholder="Grade"
                name="grade"
                className="border-2 border-white p-2 rounded-lg"
                required
              />
              <input
                placeholder="Years on Team"
                name="years"
                className="border-2 border-white p-2 rounded-lg"
                required
              />
              <button
                type="submit"
                className="border-2 border-white rounded-lg px-4 py-2 bg-gray-200 hover:cursor-pointer"
              >
                Add
              </button>
            </form>
          </div>
        </div>

        {/* Sponsors List */}
        <div className="py-10 mx-2 md:mx-20 flex justify-center items-center bg-gray-300 rounded-lg">
          {sponsors.length === 0 ? (
            <p className="text-center">No Business Cab. Members yet</p>
          ) : (
            <div className="w-full">
              {/* Header Row */}
              <div className="grid grid-cols-12 font-semibold text-center border-b pb-2 mb-2">
                <div className="col-span-3">Name</div>
                <div className="col-span-3">Position</div>
                <div className="col-span-2">Grade</div>
                <div className="col-span-2">Years</div>
                <div className="col-span-2">Action</div>
              </div>
        
              {/* Data Rows */}
              <div className="flex flex-col gap-2">
                {sponsors.map((sponsor: any) => (
                  <div
                    key={
                      sponsor.name +
                      sponsor.position +
                      sponsor.grade +
                      sponsor.years
                    }
                    className="grid grid-cols-12 items-center text-center bg-gray-200 rounded p-2 mx-2"
                  >
                    <div className="col-span-3">{sponsor.name}</div>
                    <div className="col-span-3">{sponsor.position}</div>
                    <div className="col-span-2">{sponsor.grade}</div>
                    <div className="col-span-2">{sponsor.years}</div>
        
                    <div className="col-span-2 flex justify-center items-center">
                      <form action={deleteCabinet}>
                        <input type="hidden" name="name" value={sponsor.name} />
                        <input type="hidden" name="position" value={sponsor.position} />
                        <input type="hidden" name="grade" value={sponsor.grade} />
                        <input type="hidden" name="years" value={sponsor.years} />
        
                        <button type="submit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="h-5 w-5 hover:cursor-pointer"
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