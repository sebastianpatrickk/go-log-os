ALTER TABLE "cards" ADD COLUMN "name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "cards" ADD COLUMN "is_active" boolean DEFAULT true;