ALTER TABLE `raccoon_image` RENAME TO `raccoon_artwork`;--> statement-breakpoint
ALTER TABLE `raccoon_artwork` RENAME COLUMN "name" TO "title";--> statement-breakpoint
DROP INDEX IF EXISTS `name_idx`;--> statement-breakpoint
DROP INDEX IF EXISTS "title_idx";--> statement-breakpoint
ALTER TABLE `raccoon_artwork` ALTER COLUMN "title" TO "title" text(256) NOT NULL;--> statement-breakpoint
CREATE INDEX `title_idx` ON `raccoon_artwork` (`title`);--> statement-breakpoint
ALTER TABLE `raccoon_artwork` ADD `description` text;--> statement-breakpoint
ALTER TABLE `raccoon_artwork` ADD `medium` text(256);--> statement-breakpoint
ALTER TABLE `raccoon_artwork` ADD `dimensions` text(256);--> statement-breakpoint
ALTER TABLE `raccoon_artwork` ADD `price` real;--> statement-breakpoint
ALTER TABLE `raccoon_artwork` ADD `is_for_sale` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `raccoon_artwork` ADD `date_created` integer DEFAULT (unixepoch()) NOT NULL;--> statement-breakpoint
ALTER TABLE `raccoon_artwork` ADD `tags` text;--> statement-breakpoint
ALTER TABLE `raccoon_artwork` ADD `artist_name` text(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `raccoon_artwork` ADD `collection` text(256);--> statement-breakpoint
ALTER TABLE `raccoon_artwork` ADD `location` text(256);--> statement-breakpoint
ALTER TABLE `raccoon_artwork` ADD `sfw` integer DEFAULT 0 NOT NULL;