import { z } from "zod";

export const TeamSelectSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type TeamSelect = z.infer<typeof TeamSelectSchema>;
