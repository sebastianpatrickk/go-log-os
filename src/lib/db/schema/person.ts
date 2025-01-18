import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { teams } from "./teams";
import { users } from "./users";
import { devices } from "./devices";

export const person = pgTable("person", {
  id: text("id").primaryKey(),
  firstName: varchar("first_name", { length: 100 }),
  lastName: varchar("last_name", { length: 100 }),
  email: varchar("email", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  deletedAt: timestamp("deleted_at"),
});

export const personRelations = relations(person, ({ many }) => ({
  teams: many(teams),
  users: many(users),
  devices: many(devices),
}));
