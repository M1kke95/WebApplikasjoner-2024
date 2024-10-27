import { z } from "zod"

export {habitSchema, habitsSchema};

const habitSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    imageUrl: z.string().optional()
})

const habitsSchema = z.array(habitSchema)