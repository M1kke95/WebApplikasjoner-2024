import { DATA_URL } from "../config/config";
import { habitSchema, habitsSchema } from "../features/habits/validate";

interface Project {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
    
}

export const fetchProjects = async () => {
    try {
        const response = await fetch(DATA_URL)
        const data: Project[] = await response.json()

        const safeData = habitSchema.array().safeParse(data)

        if(!safeData){
            throw new Error("Ugyldig struktur på dataen")
        }

        return data
    } catch (error) {
        console.log("Error: ", error)
        throw error
    }
}
/*
export const fetchProjects = async () => {
    try {
        const response = await fetch('http://localhost:3999/projects');  // Bruk den direkte URL-en her
        if (!response.ok) {
            console.error(`Network response was not ok: ${response.statusText}`);
            throw new Error(`Could not fetch projects, status: ${response.status}`);
        }

        const data: Project[] = await response.json();
        console.log("Fetched projects: ", data);  // Logg dataene for å verifisere
        return data;
    } catch (error) {
        console.error("Error fetching projects: ", error);
        throw error;
    }
}*/


export const removeAPIProject = async (id: string) => {
    const response = await fetch(DATA_URL,{
    method: 'DELETE'
    });
   
    if(!response.ok){
        throw new Error(`Something went wrong with the project: ${id}`)
    }
    return await response.json()
}

const list = async() => {
    try {
        const habits = await fetch(DATA_URL)
        console.log(habitsSchema.safeParse(habits))
        return habitsSchema.safeParse(habits)
    } catch (error) {
        console.log(error)
    }
}