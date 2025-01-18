import { z } from "zod";

export const deviceCardSchema = z.object({
  id: z.string(),
  name: z.string(),
  teamsCount: z.number(),
});

export type DeviceCard = z.infer<typeof deviceCardSchema>;
