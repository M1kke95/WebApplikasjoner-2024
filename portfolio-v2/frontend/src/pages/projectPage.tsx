import { useState } from "react";
import Biografi from "../components/Biografi";
import Projects from "../components/Projects";
import CreateProject from "../components/CreateProject"; 
import useProjects from "../hooks/useProjects";
import { Link } from "react-router-dom";

const ProjectPage = () => {
    const { projects, removeProject, addProject } = useProjects();
    const [isCreating, setIsCreating] = useState(false);
    console.log("addProject in ProjectPage:", addProject);
    console.log("useProjects initialized");

    const person = {
        description: "Jeg er Halgeir Geirson, jeg er student på Høgskolen i Østfold og går studerer informatikk. Jeg har en brennende interesse for design og utvikling. I tillegg til studiene jobber jeg deltid som frilans utvikler. Jeg er kjent for å forstå kundenes behov og gjøre deres tanker til virkelighet. Jeg har en sterk arbeidsmoral og ønsker å lære mer, jeg er på utkikk etter nye muligheter for læring og bidra til nye spennende prosjekter.",
        image: "https://cdn.pixabay.com/photo/2023/09/24/05/37/ai-generated-8272177_1280.jpg", //hentet herfra https://pixabay.com/no/illustrations/ai-generert-mann-90-tallet-%C3%A5rgang-8272177/
        name: "Halgeir Geirson",
        degree: "Bachelor IT",
        points: 180,
        email: "student@hiof.no",
        experiences: [
            { name: "Figma UI for customer X" },
            { name: "Website for customer Y" }
        ]
    };

    const toggleCreateProjectForm = () => setIsCreating(!isCreating);

    return (
        <main id="mainSection">
            <div id="app"></div>
            <Biografi person={person} toggleCreateProjectForm={toggleCreateProjectForm} />
            <Projects projects={projects} removeProject={removeProject} addProject={addProject} limit={2} />

            <Link to="/projects">Se alle prosjekter</Link>

            {isCreating && (
                <>
                    <div id="overlay" onClick={toggleCreateProjectForm}></div>
                    <div className="centered-form">
                        <CreateProject addProject={addProject} closeForm={toggleCreateProjectForm} />
                    </div>
                </>
            )}
        </main>
    );
}



export default ProjectPage;
