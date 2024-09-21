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
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div>
      {projects.map((project) => (
        <Project
          key={project.id} 
          id={project.id}
          name={project.name}
          description={project.description}
          startDate={project.startDate}
          endDate={project.endDate}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
}