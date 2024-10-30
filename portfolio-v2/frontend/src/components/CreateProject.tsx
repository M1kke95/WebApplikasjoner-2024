import { useState } from "react";
import { ProjectType } from "../types/types";
import { habitSchema } from "../features/habits/validate";
import { v4 as uuidv4 } from 'uuid';

type CreateProjectProps = {
    addProject: (project: ProjectType) => Promise<void>;
    closeForm: () => void;
}

export default function CreateProject({ addProject, closeForm }: CreateProjectProps) {
    console.log("addProject prop in CreateProject:", addProject);
    const [project, setProject] = useState({
        id: uuidv4(),
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        imageUrl: '',
        publishedAt: '',
        publicStatus: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setProject((existingProjects) => ({
            ...existingProjects, 
            [name]: value,
        }));
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const projectFormatted = {
            ...project,
            startDate: new Date(project.startDate).toISOString(),
            endDate: new Date(project.endDate).toISOString(),
            publishedAt: new Date(project.publishedAt).toISOString()
            
        }

        const validateResult = habitSchema.safeParse(projectFormatted);

        if (!validateResult.success) {
            const validationErrors = validateResult.error.errors.map(error => error.message).join(", ");
            console.log(validationErrors);
            return;
        }
        
        try {
            await addProject(projectFormatted); 
            console.log("Project submitted:", projectFormatted);

            closeForm()

            setProject({
                id: uuidv4(),
                name: '',
                description: '',
                startDate: '',
                endDate: '',
                imageUrl: '',
                publishedAt: '',
                publicStatus: false
            });
        } catch (error) {
            console.error("Error submitting project:", error);
        }
        
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
                <label>Start Date</label>
                <input
                    type="date"
                    name="startDate"
                    id="startDateProject"
                    value={project.startDate}
                    onChange={handleChange}
                />
                <label>End Date</label>
                <input
                    type="date"
                    name="endDate"
                    id="endDateProject"
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
                <label>Published At</label>
                <input
                    type="date"
                    name="publishedAt"
                    id="projectPublish"
                    value={project.publishedAt}
                    onChange={handleChange}
                />
                <button type="submit" onSubmit={handleSubmit}>Legg til prosjekt</button>
                <button type="button" className="close-btn" onClick={closeForm}>Close</button>
            </form>
        </section>
    );
}
