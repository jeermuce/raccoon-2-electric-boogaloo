import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { artwork } from "@/server/db/schema";

export const artworkRouter = createTRPCRouter({
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
            await ctx.db.insert(artwork).values({
                name: input.name,
                url: input.url,
            });
        }),

    getLatest: publicProcedure.query(async ({ ctx }) => {
        const image = await ctx.db.query.artwork.findFirst({
            orderBy: (artwork, { desc }) => [desc(artwork.createdAt)],
        });

        return image ?? null;
    }),

    getAll: publicProcedure.query(async ({ ctx }) => {
        const artwork = await ctx.db.query.artwork.findMany();

        return artwork;
    }),
});
