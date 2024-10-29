import { ProjectType } from "../types/types";
import Project from "./Project";



type ProjectsProps = {
  projects: ProjectType[];
    removeProject: (id: string) => Promise<void>;
    addProject: (newProject: ProjectType) => Promise<void>;
};

export default function Projects({ projects, removeProject, addProject }: ProjectsProps) {
  return (
    <section id="projectSection">
      {projects.map((project) => (
        <Project 
          key={project.id} 
          {...project} 
          removeProject={removeProject}
          addProject={addProject}
        />
      ))}
    </section>
  );
}
