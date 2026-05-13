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
  endpoint: `https://${process.env.ACCOUNT_ID!}.r2.cloudflarestorage.com`,
  // Retrieve your S3 API credentials for your R2 bucket via API tokens (see: https://developers.cloudflare.com/r2/api/tokens)
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.ACCESS_KEY_SECRET!,
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
