import { auth } from '@/auth';
import { getMentors, createMentors, editMentors, uploadImageMentors, removeMentors, sql } from '@/app/lib/data';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import Row from './row';

export default async function Page() {
  const mentors = await getMentors();
    
  async function createMentor(formData: FormData) {
    'use server';

    const session = await auth();
    if (!session?.user) {
      throw new Error('Unauthorized');
    }

    const name = formData.get("name") as string;
    const position = formData.get("pos") as string;
    const description = formData.get("desc") as string;
    const years = formData.get("years") as string;
    const specialty = formData.get("specialty") as string;
    const occupation = formData.get("occupation") as string;

    const file = formData.get('image') as File;
      
    // 1. Convert File to ArrayBuffer, then to Node.js Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (!name || !position || !years || !specialty || !buffer || !occupation) return;

    await createMentors(name, position, description, years, specialty, occupation, buffer);

    revalidatePath('/admin/mentors');
    revalidatePath('/mentors');
  }

  async function uploadMentor(formData: FormData) {
    "use server";

    const file = formData.get('image') as File;
    const sort = formData.get('sort') as string;
      
    // 1. Convert File to ArrayBuffer, then to Node.js Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    uploadImageMentors(sort,buffer);

    revalidatePath('/admin/mentors');
    revalidatePath('/mentors');
  }

  async function editMentor(sort: string, name: string, position: string, desc: string, years: string, specialty: string, occupation: string) {
    'use server';

    const session = await auth();
    if (!session?.user) {
      throw new Error('Unauthorized');
    }
    if (!name || !position || !years || !specialty || !occupation) {return;}
    await editMentors(sort,name,position,desc,years,specialty,occupation);

    revalidatePath('/admin/mentors');
    revalidatePath('/mentors');
  }
    
  async function deleteMentor(formData: FormData) {
    'use server';

    const session = await auth();
    if (!session?.user) {
      throw new Error('Unauthorized');
    }

    const name = formData.get("name") as string;
    const position = formData.get("pos") as string;
    const description = formData.get("desc") as string;
    const years = formData.get("years") as string;
    const specialty = formData.get("specialty") as string;
    const occupation = formData.get("occupation") as string;

    if (!name || !position || !description || !years || !specialty || !occupation) return;

    await removeMentors(name, position, description, years, specialty, occupation);

    revalidatePath('/admin/mentors');
    revalidatePath('/mentors');
  }

  return (
    <main className="text-center md:text-left min-h-screen bg-white w-full">
      <div className="text-black w-full flex flex-col">
        
        <div className="py-19 px-10 md:px-45 w-full">
            <div className="flex flex-row justify-center flex-wrap">
                <div className="flex flex-col items-center space-y-5">
                    <span className="text-6xl font-light flex flex-col space-y-1">
                        Mentors
                    </span>
                </div>
            </div>
        </div>

        <hr className="border-2 border-gray-400 mx-10 rounded-xl" />

        {/* Form */}
        <div className="py-10 px-6 md:px-20 flex justify-center">
          <div className="bg-gray-300 p-6 rounded-lg">
            <form
              action={createMentor}
              className="flex flex-col lg:flex-row flex-wrap gap-4 justify-center items-center"
            >
              <input type="file" name="image" accept=".jpg, .jpeg, .png" className="border-2 border-white p-2 rounded-lg hover:cursor-pointer bg-gray-200 hover:bg-gray-100 flex justify-center items-center" required/>
              <input
                placeholder="Name"
                name="name"
                className="border-2 border-white p-2 rounded-lg"
                required
                autoFocus
              />
              <input
                placeholder="Position"
                name="pos"
                className="border-2 border-white p-2 rounded-lg"
                required
              />
              <input
                placeholder="Description"
                name="desc"
                className="border-2 border-white p-2 rounded-lg"
              />
              <input
                placeholder="Years on Team"
                name="years"
                className="border-2 border-white p-2 rounded-lg"
                required
              />
              <input
                placeholder="Specialty"
                name="specialty"
                className="border-2 border-white p-2 rounded-lg"
                required
              />
              <input
                placeholder="Occupation"
                name="occupation"
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

        <div className="py-10 mx-2 md:mx-20 flex justify-center items-center bg-gray-300 rounded-lg">
          {mentors.length === 0 ? (
            <p className="text-center">No Mentors yet</p>
          ) : (
            <div className="w-full">
              {/* Header Row */}
              <div className="grid grid-cols-13 font-semibold text-center border-b pb-2 px-4 mb-2">
                <div className="col-span-1">Name</div>
                <div className="col-span-1">Position</div>
                <div className="col-span-4">Description</div>
                <div className="col-span-1">Years</div>
                <div className="col-span-2">Specialty</div>
                <div className="col-span-1">Current Occupation</div>
                <div className="col-span-3">Action</div>
              </div>
        
              {/* Data Rows */}
              <div className="flex flex-col gap-2">
                {mentors.map((mentor: any) => {       
                delete mentor.image;
                return (
                  <Row key={mentor.sort} mentor={mentor} editMentor={editMentor} uploadImage={uploadMentor} deleteMentor={deleteMentor}/>
                )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}