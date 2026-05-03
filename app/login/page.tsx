import { redirect } from 'next/navigation';
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth()
  redirect("/api/auth/signin?callbackUrl=/dashboard");
  return (<p className="h-screen text-3xl w-full text-center flex justify-center items-center bg-white text-black"><span className="animate-pulse">Signing in...</span></p>); 
}
