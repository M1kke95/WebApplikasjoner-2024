import { DATA_URL, SINGLE_PROJECT_UTL } from "../config/config";
import { habitsSchema } from "../features/habits/validate";
import { ProjectType } from "../types/types";


export const fetchProjects = async () => {
    try {
        const response = await fetch(DATA_URL);
        
        if (!response.ok) {
            throw new Error("Feil ved henting av prosjekter: " + response.statusText);
        }
        const jsonResponse = await response.json();

        console.log("API Response:", jsonResponse);

        const projectsData = jsonResponse.data; 

        if (!Array.isArray(projectsData)) {
            throw new Error("Projects data not found in API response");
        }

        const safeData = habitsSchema.safeParse(projectsData); 

        if (!safeData.success) {
            throw new Error("Ugyldig struktur på dataen: " + JSON.stringify(safeData.error));
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
    console.log("Adding project:", JSON.stringify(newProject));
    return await response.json();
}

