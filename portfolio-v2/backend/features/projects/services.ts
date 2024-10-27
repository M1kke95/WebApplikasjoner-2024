import type { ProjectType, Result } from "../../types";
import { projectRepository } from "./repository";


export type projectService = {
    list: (query: Record<string, string>) => Promise<Result<ProjectType[]>>;
    create: (data: ProjectType) => Promise<Result<ProjectType>>;
  };

export const createProjectService = (
    repository: typeof projectRepository
): projectService => {
    return{
        list: async(query)=> {
            return repository.list(query)
        },
        create: async(data) => {
            return repository.create(data)
        }
    }
}

export const projectService = createProjectService(projectRepository)