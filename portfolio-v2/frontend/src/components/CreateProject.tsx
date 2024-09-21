import { useState } from "react";

export default function CreateProject({addNewProject}){
    const [project, setProject] = useState({
        id: '',
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        imageUrl: ''
    });


    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="id" placeholder="ID" 
                value={project.id} onChange={handleChange}/>
            <textarea name="description" placeholder="Beskrivelse" 
                value={project.description} onChange={handleChange} />
            <input type="text" name="startDate" placeholder="Start Date"
                value={project.startDate} onChange={handleChange}/>
            <input type="text" name="endDate" placeholder="end Date"
                value={project.endDate} onChange={handleChange}/>
            <input type="text" name="imgURL" placeholder="imgURL"
                value={project.imageUrl} onChange={handleChange}/>
            <button type="submit">Legg til dine prosjekter</button>
        </form>
    )
}