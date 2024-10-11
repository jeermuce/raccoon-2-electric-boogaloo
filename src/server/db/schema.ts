// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
    index,
    int,
    real,
    sqliteTableCreator,
    text,
} from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `raccoon_${name}`);

export const artwork = createTable(
    "artwork",
    {
        id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
        title: text("title", { length: 256 }).notNull(),
        description: text("description"),
        medium: text("medium", { length: 256 }),
        dimensions: text("dimensions", { length: 256 }),
        price: real("price"),
        isForSale: int("is_for_sale").default(0).notNull(), // Use 0 for false, 1 for true
        dateCreated: int("date_created", { mode: "timestamp" })
            .default(sql`(unixepoch())`)
            .notNull(),
        createdAt: int("created_at", { mode: "timestamp" })
            .default(sql`(unixepoch())`)
            .notNull(),
        updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
            () => new Date(),
        ),
        url: text("url", { length: 256 }).notNull(),
        tags: text("tags"),
        artistName: text("artist_name", { length: 256 }).notNull(),
        collection: text("collection", { length: 256 }),
        location: text("location", { length: 256 }),
        sfw: int("sfw").default(0).notNull(), // Defaults to 0 (NSFW)
    },
    (example) => ({
        titleIndex: index("title_idx").on(example.title),
    }),
);
