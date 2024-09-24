export type ProjectProps = {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  removeProject: (id: string) => void; 
};

export default function Project({
    id,
    name,
    description,
    startDate,
    endDate,
    imageUrl,
    removeProject,
    
  }: ProjectProps) {
    return (
      <div className="project-card">
        <h2>{name}</h2>
        <img className="projectImage" src={imageUrl} alt={name} />
        <p>{description}</p>
        <p>Start Date: {startDate}</p>
        <p>End Date: {endDate}</p>
        <button id="deleteProject" onClick={() => removeProject(id)}>Fjern prosjekt</button>
      </div>
    );
  }