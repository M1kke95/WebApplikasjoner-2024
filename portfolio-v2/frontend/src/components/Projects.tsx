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
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <Project {...project} />
          <button onClick={() => removeProject(project.id)}>Fjern prosjekt</button>
        </div>
      ))}
    </div>
  );
}