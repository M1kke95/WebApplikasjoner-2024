import { useState } from "react";
import { ProjectProps } from "./Project";

type CreateProjectProps = {
    addNewProject: (project: ProjectProps) => void;
}

export default function CreateProject({ addNewProject }: CreateProjectProps){
    const [project, setProject] = useState({
        id: '',
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        imageUrl: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = event.target;

        setProject((existingProjects) => ({
            ...existingProjects,[name]: value,
        }))
    }

    const handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault();

        addNewProject(project)
        console.log(project)
        setProject({
            id: '',
            name: '',
            description: '',
            startDate: '',
            endDate: '',
            imageUrl: ''
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" 
                value={project.name} onChange={handleChange}/>
            <textarea name="description" placeholder="Beskrivelse" 
                value={project.description} onChange={handleChange} />
            <input type="text" name="startDate" placeholder="Start Date"
                value={project.startDate} onChange={handleChange}/>
            <input type="text" name="endDate" placeholder="end Date"
                value={project.endDate} onChange={handleChange}/>
            <input type="text" name="imageUrl" placeholder="imgURL"
                value={project.imageUrl} onChange={handleChange}/>
            <button type="submit">Legg til dine prosjekter</button>
        </form>
    )
}