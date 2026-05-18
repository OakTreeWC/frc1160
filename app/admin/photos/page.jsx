import UploadS3 from './uploads3';
import { revalidatePath } from 'next/cache';

const uploadDialogs = [
    {
        text: "Homepage | Background",
        s3key: "homepage/herophoto",
        path: "/"
    },
    {
        text: "Homepage | About Us",
        s3key: "homepage/yippee",
        path: "/"
    },
    {
        text: "About Us | Team",
        s3key: "aboutus/team",
        path: "/aboutus"
    },
    {
        text: "Donate | Photo",
        s3key: "donate/donate",
        path: "/donate"
    },
];

export default async function Page() {

    async function revalPath(path) {
        "use server"
        console.log(`revalidated ${path}`);
        revalidatePath(path);
    }
    
    return (
    <main className="text-center md:text-left min-h-screen bg-white">
      <div className="text-black w-full flex flex-col">
        
        <div className="py-19 px-10 md:px-25 w-full">
            <div className="flex flex-row justify-center flex-wrap">
                <div className="flex flex-col items-center space-y-5 w-full text-center">
                    <span className="text-6xl font-light flex flex-col space-y-1">
                        Site Photos
                    </span>
                </div>
            </div>
        </div>

          {
              uploadDialogs.map(dialog => (
              <div key={dialog.s3key}>
                <hr className="border-2 border-gray-400 mx-10 rounded-xl" />
                <div className="flex flex-col justify-center items-center">
                    <span className="text-2xl text-center w-full pt-15">{dialog.text}</span>
                    <UploadS3 s3key={dialog.s3key} onSubmit={revalPath} path={dialog.path} />
                </div>
              </div>
              ))
          }
      </div>
    </main>
    )
}