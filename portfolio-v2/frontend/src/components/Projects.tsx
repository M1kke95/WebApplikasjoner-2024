import { ProjectsProp} from "../types/types";
import Project from "./Project";





export default function Projects({ projects, removeProject, addProject }: ProjectsProp) {
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
