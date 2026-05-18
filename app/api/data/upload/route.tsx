import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { NextResponse } from 'next/server';
import { auth } from '@/auth';

// Interface for request body
interface UploadRequest {
  fileName: string;
  fileType: string;
}

// Configure S3 client
import s3Client from '@/app/lib/s3r2';

export async function POST(request: Request) {
    // Authentication check
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { fileName, fileType }: UploadRequest = await request.json();

        // Server-side validation
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        if (!allowedTypes.includes(fileType)) {
        return NextResponse.json({ message: 'File type not allowed' }, { status: 400 });
        }
        if (!fileName || fileName.length > 100) {
        return NextResponse.json({ message: 'Invalid file name' }, { status: 400 });
        }

        // Sanitize file name
        const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');

        // Generate signed URL
        const params = {
        Bucket: 'frc1160',
        Key: `uploads/${Date.now()}-${sanitizedFileName}`,
        ContentType: fileType,
        // No public-read ACL for enhanced security
        };

        const command = new PutObjectCommand(params);
        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 60 });

        return NextResponse.json({ url: signedUrl });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
        { message: 'Server error', error: (error as Error).message },
        { status: 500 }
        );
    }
}