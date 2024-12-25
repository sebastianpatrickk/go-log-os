import { relations } from "drizzle-orm";
import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";

export const teams = pgTable("teams", {
  id: serial("id").primaryKey(),
  ownerId: text("owner_id").notNull(),
  name: varchar("name", { length: 100 }),
  description: varchar("description", { length: 255 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  deletedAt: timestamp("deleted_at"),
});

export const teamsRelations = relations(teams, ({ many }) => ({
  users: many(users),
}));
