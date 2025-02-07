import { z } from "zod"

const base = z.object({
  name: z.string().min(3).max(20)
})

export const NodeSchema = z.discriminatedUnion("type", [
  z
    .object({
      type: z.literal("user"),
      username: z.string().min(3).max(50),
      habit: z.string().optional()
    })
    .merge(base),
  z
    .object({
      type: z.literal("habit"),
      username: z.string().optional(),
      habit: z.string()
    })
    .merge(base)
])
