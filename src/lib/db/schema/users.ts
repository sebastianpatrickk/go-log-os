import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { teams } from "./teams";
import { entries } from "./entries";
import { cards } from "./cards";
import { person } from "./person";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 100 }),
  lastName: varchar("last_name", { length: 100 }),
  email: varchar("email", { length: 255 }).notNull(),
  role: varchar("role", { length: 20 }).notNull().default("user"),
  teamId: integer("team_id").references(() => teams.id),
  personId: text("person_id")
    .notNull()
    .references(() => person.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  deletedAt: timestamp("deleted_at"),
});

export const usersRelations = relations(users, ({ one, many }) => ({
  entries: many(entries),
  cards: many(cards),
  team: one(teams, {
    fields: [users.teamId],
    references: [teams.id],
  }),
  person: one(person, {
    fields: [users.personId],
    references: [person.id],
  }),
}));
