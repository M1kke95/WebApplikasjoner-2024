import { ProjectsProp } from "../types/types";
import Project from "./Project";

export default function Projects({ projects, removeProject, addProject, limit }: ProjectsProp & { limit?: number }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects; 
  
  return (
    <section id="projectSection">
      {displayedProjects.map((project) => (
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
