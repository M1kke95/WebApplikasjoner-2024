import { z } from "zod"

export {habitSchema, habitsSchema};

const habitSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    description: z.string(),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    imageUrl: z.string().optional()
})

const habitsSchema = z.array(habitSchema)