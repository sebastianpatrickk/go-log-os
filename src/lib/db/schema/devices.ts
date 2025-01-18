import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { generateId } from "@/lib/id";
import { teamsToDevices } from "./teams";
import { person } from "./person";

export const devices = pgTable("devices", {
  id: varchar("id", { length: 30 })
    .$defaultFn(() => generateId("device"))
    .primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  apiKey: varchar("api_key", { length: 255 }).notNull(),
  personId: integer("person_id")
    .notNull()
    .references(() => person.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").default(sql`current_timestamp`),
  deletedAt: timestamp("deleted_at"),
});

export const devicesRelations = relations(devices, ({ one, many }) => ({
  teams: many(teamsToDevices),
  person: one(person, {
    fields: [devices.personId],
    references: [person.id],
  }),
}));
