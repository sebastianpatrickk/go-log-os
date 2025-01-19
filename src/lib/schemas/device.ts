import { z } from "zod";

export const inputDeviceCardSchema = z.object({
  personId: z.string(),
});

export type InputDeviceCard = z.infer<typeof inputDeviceCardSchema>;

export const deviceCardSchema = z.object({
  id: z.string(),
  name: z.string(),
  teamsCount: z.number(),
});
export type DeviceCard = z.infer<typeof deviceCardSchema>;

export const pairDeviceSchema = z.object({
  apiKey: z.string().length(8, "API key must be exactly 8 characters"),
  teams: z
    .array(z.string())
    .min(1, "Please select at least one team")
    .refine(
      (teams) => teams.every((team) => team.length > 0) && teams.length > 0,
      "Please select a team for each field",
    ),
  personId: z.string(),
});

export type PairDevice = z.infer<typeof pairDeviceSchema>;

export const setupDeviceSchema = z.object({
  id: z.string(),
  apiKey: z.string().length(8, "API key must be exactly 8 characters"),
});

export type SetupDevice = z.infer<typeof setupDeviceSchema>;
