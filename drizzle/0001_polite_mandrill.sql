ALTER TABLE `raccoon_post` RENAME TO `raccoon_image`;--> statement-breakpoint
ALTER TABLE `raccoon_image` ADD `url` text(256) NOT NULL;