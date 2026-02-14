import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string(),
  email: z.email(),
  subject: z.string().min(2).max(300),
  text: z.string().min(2).max(3000),
  kind: z.literal(["developer", "creative"]),
});
