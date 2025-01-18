import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "./users";
import { devices } from "./devices";
import { person } from "./person";

export const teams = pgTable("teams", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }),
  description: varchar("description", { length: 255 }),
  personId: integer("person_id")
    .notNull()
    .references(() => person.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  deletedAt: timestamp("deleted_at"),
});

export const teamsRelations = relations(teams, ({ one, many }) => ({
  users: many(users),
  devices: many(teamsToDevices),
  person: one(person, {
    fields: [teams.personId],
    references: [person.id],
  }),
}));

export const teamsToDevices = pgTable("teams_to_devices", {
  teamId: integer("team_id")
    .references(() => teams.id)
    .notNull(),
  deviceId: varchar("device_id", { length: 30 })
    .references(() => devices.id)
    .notNull(),
});

export const teamsToDevicesRelations = relations(teamsToDevices, ({ one }) => ({
  team: one(teams, {
    fields: [teamsToDevices.teamId],
    references: [teams.id],
  }),
  device: one(devices, {
    fields: [teamsToDevices.deviceId],
    references: [devices.id],
  }),
}));
