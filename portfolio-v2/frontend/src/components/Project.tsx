import { ProjectProps } from "../types/types";
import { format } from 'date-fns'; 

export default function Project({
    id,
    name,
    description,
    startDate,
    endDate,
    imageUrl,
    publishedAt,
    publicStatus,
    removeProject,

    
  }: ProjectProps) {

    const formattedStart = format(new Date(startDate),'dd-MM-yyyy')
    const formattedEnd = format(new Date(endDate),'dd-MM-yyyy')
    const formattedPublishedAt = format(new Date(publishedAt), 'dd-MM-yyyy');

    return (
      <div className="project-card">
        <h2>{name}</h2>
        <img className="projectImage" src={imageUrl} alt={name} />
        <p>{description}</p>
        <p>Start Date: {formattedStart}</p>
        <p>End Date: {formattedEnd}</p>
        <p>Published At: {formattedPublishedAt}</p> 
        <p>Status: {publicStatus ? 'Public' : 'Private'}</p> 
        <button id="deleteProject" onClick={() => removeProject(id)}>Fjern prosjekt</button>
      </div>
    );
  }