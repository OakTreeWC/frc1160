'use client';
 
import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';
import Image from 'next/image';
 
export default function AvatarUploadPage() {
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);
  return (
    <main className="text-center md:text-left min-h-screen bg-white">
      <div className="text-black w-full flex flex-col">
        
        <div className="py-19 px-10 md:px-25 w-full">
            <div className="flex flex-row justify-center flex-wrap">
                <div className="flex flex-col items-center space-y-5 w-full text-center">
                    <span className="text-6xl font-light flex flex-col space-y-1">
                        Homepage Photo
                    </span>
                </div>
            </div>
        </div>

        <hr className="border-2 border-gray-400 mx-10 rounded-xl" />

        {/* Form */}
        <div className="flex justify-center items-center w-full py-10">
          <div className="bg-gray-300 p-6 rounded-lg">
            <form
              onSubmit={async (event) => {
                event.preventDefault();
      
                const file = inputFileRef.current.files[0];
      
                const newBlob = await upload('herophoto.anyimgext', file, {
                  access: 'public',
                  handleUploadUrl: '/api/handleUpload'
                });
      
                setBlob(newBlob);
              }}
              className='flex flex-col md:flex-row gap-4 items-center'
            >
              <input
                name="file"
                ref={inputFileRef}
                type="file"
                accept="image/jpeg, image/png, image/webp"
                className="border-2 border-white bg-white p-2 rounded-lg"
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
      {
        blob && (
          <Image src={blob.url} height={300} width={300} alt="Uploaded Image" className="mx-auto mt-10 rounded-lg" />
        )
      }
      </div>
    </main>
  );
}