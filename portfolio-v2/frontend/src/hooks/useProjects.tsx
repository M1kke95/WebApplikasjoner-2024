import { fetchProjects, removeAPIProject } from "../services/api";
import { useEffect, useState } from "react";
import { ProjectType } from "../types/types";


interface useProjects {
    projects: ProjectType[];
    loading: boolean;
    removeProject: (id: string) => Promise<void>

}

const useProjects = (): useProjects => {
    const [projects, setProjects ] = useState<ProjectType[]>([]);
    const [loading, setLoading] = useState(true)
    


    useEffect(() =>{
        const getProjects = async() =>{
            try {
                const data = await fetchProjects()
                setProjects(data)
            } catch (error) {
                return error
            }finally{
                setLoading(false)
            }
        }
            getProjects();
        },[])



        const removeProject = async (id: string) => {
            try {
                await removeAPIProject(id); 
                setProjects(prev => prev.filter(project => project.id !== id)); 
            } catch (error) {
                console.log(error)
            }
        };

        return { projects, loading, removeProject };
}
export default useProjects