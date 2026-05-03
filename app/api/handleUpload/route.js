import { handleUpload } from '@vercel/blob/client';
import { list, del, head } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';
 
export async function POST(request) {
  const session = await auth();
  if (session?.user?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const body = await request.json();
 
  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname /*, clientPayload */) => {
        // Authenticate users before generating the token
        const session = await auth();
        if (session.user.role !== 'admin') throw new Error('Not authenticated');

        const blobs = await list();

        const url = blobs.blobs.find((b) => b.pathname.includes('herophoto'))?.url;
        if (url) {
          // Delete the existing hero photo blob if it exists
          const existingBlob = await head(url);
          if (existingBlob) {
            await del(url);
          }
        }
 
        return {
          allowedContentTypes: ['image/jpeg', 'image/png', 'image/webp'],
          addRandomSuffix: true,
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Called by Vercel Blob when the client upload completes
        // Use tools like ngrok if you want this to work locally
 
        console.log('blob upload completed', blob, tokenPayload);
        
        try {
            revalidatePath('/');
        } catch (error) {
          throw new Error('Could not update user');
        }
      },
    });
 
    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }, // The webhook will retry 5 times waiting for a status 200
    );
  }
}