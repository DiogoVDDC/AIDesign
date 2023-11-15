import { z } from "zod";
import { SES } from 'aws-sdk';

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

async function sendPlainTextEmail(to: string, subject: string, message: string) {
    const region = process.env.AWS_REGION;
    const accessKeyId = process.env.AWS_SES_ACCESS_KEY_ID;
    const secretAccessKey = process.env.AWS_SES_SECRET_ACCESS_KEY;

    if (!region || !accessKeyId || !secretAccessKey) {
        throw new Error('AWS SES credentials and region must be defined in .env file');
    }

    // Initialize SES with your AWS credentials
    const ses = new SES({
        region,
        accessKeyId,
        secretAccessKey
    });

    const params = {
        Source: "your-email@example.com", // The email address you verified with AWS SES
        Destination: {
            ToAddresses: [to] // The recipient's email address
        },
        Message: {
            Subject: {
                Data: subject,
                Charset: 'UTF-8'
            },
            Body: {
                Text: {
                    Data: message,
                    Charset: 'UTF-8'
                }
            }
        }
    };

    try {
        await ses.sendEmail(params).promise();
        console.log("Email sent successfully!");
    } catch (error) {
        console.error("Failed to send the email:", error);
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: 'Failed to send email using SES' });
    }
}

export const personRouter = createTRPCRouter({

    contact: publicProcedure.input(z.object({
        email: z.string(),
        message: z.string(),
    })).mutation(async ({ input }) => {

        sendPlainTextEmail("x", "y", "Hello")
    }),
});
