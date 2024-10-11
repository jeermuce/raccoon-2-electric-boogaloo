import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { artwork } from "@/server/db/schema";
import { desc } from "drizzle-orm";

export const artworkRouter = createTRPCRouter({
    hello: publicProcedure
        .input(z.object({ text: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.text ?? "world"}`,
            };
        }),

    create: publicProcedure
        .input(
            z.object({
                title: z.string().min(1),
                url: z.string().min(1),
                artistName: z.string().min(1),
                isForSale: z.boolean(),
                sfw: z.boolean(),
                price: z.number().optional(),
                description: z.string().optional(),
                medium: z.string().optional(),
                dimensions: z.string().optional(),
                tags: z.string().optional(),
                collection: z.string().optional(),
                location: z.string().optional(),
            }),
        )
        .mutation(async ({ ctx, input }) => {
            await ctx.db.insert(artwork).values({
                title: input.title,
                url: input.url,
                isForSale: input.isForSale ? 1 : 0,
                artistName: input.artistName,
                sfw: input.sfw ? 1 : 0,
                price: input.price || null,
                description: input.description || null,
                medium: input.medium || null,
                dimensions: input.dimensions || null,
                tags: input.tags || null,
                collection: input.collection || null,
                location: input.location || null,
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

//   id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
//         title: text("title", { length: 256 }).notNull(),
//         description: text("description"),
//         medium: text("medium", { length: 256 }),
//         dimensions: text("dimensions", { length: 256 }),
//         price: real("price"),
//         isForSale: int("is_for_sale").default(0).notNull(), // Use 0 for false, 1 for true
//         dateCreated: int("date_created", { mode: "timestamp" })
//             .default(sql`(unixepoch())`)
//             .notNull(),
//         createdAt: int("created_at", { mode: "timestamp" })
//             .default(sql`(unixepoch())`)
//             .notNull(),
//         updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
//             () => new Date(),
//         ),
//         url: text("url", { length: 256 }).notNull(),
//         tags: text("tags"),
//         artistName: text("artist_name", { length: 256 }).notNull(),
//         collection: text("collection", { length: 256 }),
//         location: text("location", { length: 256 }),
//         sfw: int("sfw").default(0).notNull(), // Defaults to 0 (NSFW)
