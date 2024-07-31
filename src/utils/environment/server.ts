import z from "zod";

const envServerSchema = z.object({
  SECRET_KEY: z.string(),
});

export const envServer = envServerSchema.parse({
  SECRET_KEY: process.env.SECRET_KEY || "123",
});
