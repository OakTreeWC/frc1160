import {
  S3Client,
  ListBucketsCommand,
  ListObjectsV2Command,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const S3 = new S3Client({
  region: "auto", // Required by SDK but not used by R2
  // Provide your Cloudflare account ID
  endpoint: `https://6183370dcb0d4ffd3b237c05e231c8d4.r2.cloudflarestorage.com`,
  // Retrieve your S3 API credentials for your R2 bucket via API tokens (see: https://developers.cloudflare.com/r2/api/tokens)
  credentials: {
    accessKeyId: "cffafb3c14df316a660c9978b803f4a5",
    secretAccessKey: "9941dd3266d1d62fa58961e29b028fa2de9c5d1c83982a030f5cf5f4007207de",
  },
});

export default S3;

export async function getSignedUrlFunction(key, expiresin=3600) {
    console.log(
      await getSignedUrl(
        S3,
        new GetObjectCommand({ Bucket: "frc1160", Key: key }),
        { expiresIn: expiresin },
      ),
    );
}
