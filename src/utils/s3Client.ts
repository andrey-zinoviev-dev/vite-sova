import { S3Client } from "@aws-sdk/client-s3";
// import { Upload } from "@aws-sdk/lib-storage";

// TypeScript interfaces for better type safety
export interface S3UploadProgress {
  loaded: number;
  total: number;
}

// export interface S3UploadResult {
//   Location: string;
//   Bucket: string;
//   Key: string;
// }

// S3 Client instance with environment configuration
export const s3ClientInitiated = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_KEY_ACCESS,
    secretAccessKey: import.meta.env.VITE_AWS_KEY_SECRET,
  },
  endpoint: import.meta.env.VITE_AWS_ENDPOINT,
});

// // S3 bucket name from environment
// export const S3_BUCKET_NAME = import.meta.env.VITE_AWS_NAME;

// // Utility function for uploading files to S3
// export const uploadFileToS3 = async (
//   file: File,
//   onProgress?: (progress: S3UploadProgress) => void
// ): Promise<S3UploadResult> => {
//   const upload = new Upload({
//     client: s3Client,
//     params: {
//       Bucket: S3_BUCKET_NAME,
//       Key: file.name,
//       Body: file,
//       ContentType: file.type,
//     },
//   });

//   if (onProgress) {
//     upload.on("httpUploadProgress", onProgress);
//   }

//   return upload.done();
// };

// // Utility function for uploading multiple files
// export const uploadMultipleFilesToS3 = async (
//   files: File[],
//   onProgress?: (progress: S3UploadProgress) => void
// ): Promise<S3UploadResult[]> => {
//   const uploadPromises = files.map((file) => uploadFileToS3(file, onProgress));

//   return Promise.all(uploadPromises);
// };
