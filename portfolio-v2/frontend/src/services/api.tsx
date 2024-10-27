import { DATA_URL, SINGLE_PROJECT_UTL } from "../config/config";
import { habitSchema, habitsSchema } from "../features/habits/validate";
import { ProjectType } from "../types/types";

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
        const response = await fetch(DATA_URL);
        
        if (!response.ok) {
            throw new Error("Feil ved henting av prosjekter: " + response.statusText);
        }
        const jsonResponse = await response.json();

        if (!jsonResponse.success) {
            throw new Error("Feil i API-respons: " + jsonResponse.error.message);
        }
        const safeData = habitSchema.array().safeParse(jsonResponse.data);

        if (!safeData.success) {
            throw new Error("Ugyldig struktur på dataen");
        }

        return safeData.data; 
    } catch (error) {
        console.log("Error: ", error);
        throw error; 
    }
};

export const fetchSingleProject = async (id: string) => {
    try {
        const response = await fetch(`${SINGLE_PROJECT_UTL.replace(':id', id)}`);

        if(!response.ok){
            throw new Error(`Can't find Project with Id : ${id}`)
        }

        const project = await response.json()
        return project;
    } catch (error) {
        console.error(error)
    }
}

export const removeAPIProject = async (id: string) => {
    const response = await fetch(`${SINGLE_PROJECT_UTL.replace(':id', id)}`,{
    method: 'DELETE'
    });
   
    if(!response.ok){
        throw new Error(`Something went wrong with the project: ${id}`)
    }
    return await response.json()
}


export const UpdateApiProject = async(id: string, updatedProject: Partial<ProjectType>) => {
    const response = await fetch(`${DATA_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(updatedProject)
    })
    return response.json()
}

export const addAPIProject = async (newProject: ProjectType) => {
    const response = await fetch(DATA_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProject)
    });

    if (!response.ok) {
        throw new Error('Cannot add the project');
    }

    return await response.json();
}