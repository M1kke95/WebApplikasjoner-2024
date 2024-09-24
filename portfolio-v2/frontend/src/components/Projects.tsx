import Project from "./Project";

type ProjectType = {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
};

type ProjectsProps = {
  projects: ProjectType[];
  removeProject: (id: string) => void;
};

export default function Projects({ projects, removeProject }: ProjectsProps) {
  return (
    <section id="projectSection">
      {projects.map((project) => (
        <Project 
          key={project.id} 
          {...project} 
          removeProject={removeProject}
        />
      ))}
    </section>
  );
}
