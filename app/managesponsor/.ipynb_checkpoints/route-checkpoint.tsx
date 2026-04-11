// app/api/add-sponsor/route.ts
import { addSponsors, removeSponsor } from '@/app/lib/data';
import { useSession } from "next-auth/react";
export async function POST(req: Request) {
  const { sponsor } = await req.json();
  await addSponsors([sponsor]);

  return Response.json({ success: true });
}

export async function DELETE(req: Request) {
  const { sponsor } = await req.json();

  await removeSponsor(sponsor);

  return Response.json({ success: true });
}