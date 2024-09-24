import { useState } from "react";
import { ProjectProps } from "./Project";

type CreateProjectProps = {
    addNewProject: (project: ProjectProps) => void;
    closeForm: () => void;
}

export default function CreateProject({ addNewProject, closeForm }: CreateProjectProps) {
    const [project, setProject] = useState({
        id: '',
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        imageUrl: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setProject((existingProjects) => ({
            ...existingProjects, [name]: value,
        }));
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addNewProject(project);
        console.log(project);
        setProject({
            id: '',
            name: '',
            description: '',
            startDate: '',
            endDate: '',
            imageUrl: ''
        });
    }

    return (
        <section>
            <form onSubmit={handleSubmit} id="projectCreation">
                <input
                    type="text"
                    id="projectName"
                    name="name"
                    placeholder="Name"
                    value={project.name}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    id="projectDescription"
                    placeholder="Beskrivelse"
                    value={project.description}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="startDate"
                    id="startDateProject"
                    placeholder="Start Date"
                    value={project.startDate}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="endDate"
                    id="endDateProject"
                    placeholder="End Date"
                    value={project.endDate}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="imageUrl"
                    id="projectImage"
                    placeholder="Image URL"
                    value={project.imageUrl}
                    onChange={handleChange}
                />
                <button type="submit">Legg til dine prosjekter</button>
                <button type="button" className="close-btn" onClick={closeForm}>Close</button>
            </form>
        </section>
    );
}
