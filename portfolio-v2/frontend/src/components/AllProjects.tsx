import { useEffect } from "react";
import { Link } from "react-router-dom"; 
import Projects from "../components/Projects";
import useProjects from "../hooks/useProjects";

const AllProjects = () => {
    const { projects, removeProject, addProject } = useProjects();

    useEffect(() => {
        console.log("All projects loaded:", projects);
    }, [projects]);

    return (
        <main id="allProjectsSection">
            <h2>Alle Prosjekter</h2>
            <Projects projects={projects} removeProject={removeProject} addProject={addProject} />
            <Link to="/">Tilbake til Hjem</Link>
        </main>
    );
};

export default AllProjects;
