import { fetchProjects, removeAPIProject, addAPIProject, UpdateApiProject } from "../services/api";
import { useEffect, useState } from "react";
import { ProjectType } from "../types/types";

interface useProjects {
    projects: ProjectType[];
    loading: boolean;
    removeProject: (id: string) => Promise<void>;
    addProject: (newProject: ProjectType) => Promise<void>;
    updateProject: (id: string, updatedProject: Partial<ProjectType>) => Promise<void>;
}


const useProjects = (): useProjects => {
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const getProjects = async () => {
            try {
                const data = await fetchProjects();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };
        getProjects();
    }, []);

    const removeProject = async (id: string) => {
        try {
            await removeAPIProject(id);
            setProjects(prev => prev.filter(project => project.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const addProject = async (newProject: ProjectType) => {
        try {
            const createdProject = await addAPIProject(newProject);
            setProjects(prev => [...prev, createdProject]);
        } catch (error) {
            console.log("Error adding project:", error);
        }
    };

    const updateProject = async (id: string, updatedProject: Partial<ProjectType>) => {
        try {
            const updated = await UpdateApiProject(id, updatedProject);
            setProjects(prev => prev.map(project => project.id === id ? updated : project));
        } catch (error) {
            console.log(error);
        }
    };

    return { projects, loading, removeProject, addProject, updateProject };
};

export default useProjects;
