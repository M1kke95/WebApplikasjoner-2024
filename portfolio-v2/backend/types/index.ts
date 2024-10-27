export type Result<T> =
  | {
      success: true;
      data: T;

    }
  | {
      success: false;
      error: {
        code: string;
        message: string;
      };
    };

    export interface ProjectType {
        id: string;
        name: string;
        description: string;
        startDate: string;
        endDate: string;
        imageUrl: string;
        
    }
/*
    import { z } from "zod"

export {habitSchema, habitsSchema};

const habitSchema = z.object({
    id: z.string(), 
    name: z.string(),
    description: z.string(),
    startDate: z.string().refine(dateString => {
        const parts = dateString.split(".");
        if (parts.length !== 3) return false;
        const [day, month, year] = parts.map(Number);
        return (
            !isNaN(day) &&
            !isNaN(month) &&
            !isNaN(year) &&
            day >= 1 && day <= 31 &&
            month >= 1 && month <= 12 &&
            year > 0
        );
    }, {
        message: "wrong format this is the expected format: DD.MM.YYYY."
    }),
    endDate: z.string().refine(dateString => {
        const parts = dateString.split(".");
        if (parts.length !== 3) return false;
        const [day, month, year] = parts.map(Number);
        return (
            !isNaN(day) &&
            !isNaN(month) &&
            !isNaN(year) &&
            day >= 1 && day <= 31 &&
            month >= 1 && month <= 12 &&
            year > 0
        );
    }, {
        message: "wrong format this is the expected format: DD.MM.YYYY."
    }),
    imageUrl: z.string().optional()
});
const habitsSchema = z.array(habitSchema)*/