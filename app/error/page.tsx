"use client"
 
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
 
enum Error {
  Configuration = "Configuration",
  AccessDenied = "AccessDenied"
}
 
const errorMap = {
  [Error.Configuration]: (
    <p className="text-2xl">
      There was a problem when trying to authenticate. Unique error code:{" "}
      <code className="rounded-sm bg-slate-100 p-1 text-xs">Configuration</code>
    </p>
  ),
    [Error.AccessDenied]: (
        <p>
            Access Denied
        </p>
    )
}
 
export default function AuthErrorPage() {
  const search = useSearchParams()
  const error = search.get("error") as Error
  console.log(error)
  return (
    <>
        <div id="cards" className="relative text-black w-full h-full flex flex-col opacity-100 text-center justify-center items-center bg-white/85">
            <div className="py-19 px-10 md:px-45 w-full">
                <div className="flex flex-row flex-wrap justify-center">
                    <div className="flex flex-col items-center space-y-7">
                        <span className="text-6xl font-light flex flex-col space-y-1">
                            {errorMap[error] || "Something Went Wrong"}
                        </span>
                        <span className={clsx("text-xl font-light px-8", {"hidden": error === "AccessDenied"})}>
                            If this error persists, <Link href={`mailto:titaniumrobotics@gmail.com?subject=${error}`} className="underline text-blue-500">Contact Us</Link>
                        </span>
                        <div className="flex justify-center opacity-100">
                            <Link href="mailto:titaniumrobotics@gmail.com?subject=Donating To Titanium" className="p-3 border-5 border-blue-500 transition-colors ease-in-out duration-300 font-bold text-2xl text-blue-500 hover:border-blue-400 hover:text-blue-400">Go Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

