import { z } from "zod"

export {habitSchema, habitsSchema};

const habitSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    imageUrl: z.string().optional(),
    publishedAt: z.string(),
    publicStatus: z.union([z.boolean(), z.number().refine(val => val === 0 || val === 1)])
}).transform(data => ({
    ...data,
    publicStatus: typeof data.publicStatus === 'boolean' ? data.publicStatus : data.publicStatus === 1 
}));

const habitsSchema = z.array(habitSchema)