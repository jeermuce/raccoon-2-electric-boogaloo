import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { images } from "@/server/db/schema";

export const imageRouter = createTRPCRouter({
    hello: publicProcedure
        .input(z.object({ text: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.text ?? "world"}`,
            };
        }),

    create: publicProcedure
        .input(z.object({ name: z.string().min(1), url: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            await ctx.db.insert(images).values({
                name: input.name,
                url: input.url,
            });
        }),

    getLatest: publicProcedure.query(async ({ ctx }) => {
        const image = await ctx.db.query.images.findFirst({
            orderBy: (images, { desc }) => [desc(images.createdAt)],
        });

        return image ?? null;
    }),

    getAll: publicProcedure.query(async ({ ctx }) => {
        const images = await ctx.db.query.images.findMany();

        return images;
    }),
});
