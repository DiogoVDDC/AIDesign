import { z } from "zod";
import { S3 } from 'aws-sdk';

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const personRouter = createTRPCRouter({

    get_S3_file_put_object_presigned_url: publicProcedure.input(z.object({
        filename: z.string(),
        contentType: z.string(),
    })).mutation(async ({ input }) => {

        const region = process.env.AWS_REGION;
        const accessKeyId = process.env.AWS_S3_ACCESS_KEY_ID_PERSON_FILES;
        const secretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY_PERSON_FILES;
        const bucket_name = process.env.NEXT_PUBLIC_AWS_S3_FILES_BUCKET_NAME;

        if (!region || !accessKeyId || !secretAccessKey || !bucket_name) {
            throw new Error('AWS credentials and region must be defined in .env file');
        }

        console.log("s3 params", {
            region: process.env.AWS_REGION,
            accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID_PERSON_FILES,
            secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY_PERSON_FILES
        })

        console.log("bucket name", bucket_name)

        const s3 = new S3({
            region: process.env.AWS_REGION,
            accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID_PERSON_FILES,
            secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY_PERSON_FILES
        });

        const params = {
            Bucket: bucket_name,
            Key: input.filename,
            // ContentType: input.contentType,
            Expires: 120, // expiration time of the URL in seconds
        };

        try {
            const presignedUrl = await s3.getSignedUrlPromise('putObject', params);
            return { presignedUrl };
        } catch (error) {
            console.error(error);
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: 'Failed to create a presigned URL' });
        }
    }),
});
