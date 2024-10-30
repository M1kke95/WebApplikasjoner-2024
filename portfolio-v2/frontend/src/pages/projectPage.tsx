import { useState } from "react";
import Biografi from "../components/Biografi";
import Projects from "../components/Projects";
import CreateProject from "../components/CreateProject"; 
import useProjects from "../hooks/useProjects";

const ProjectPage = () => {
    const { projects, removeProject, addProject } = useProjects();
    const [isCreating, setIsCreating] = useState(false);
    console.log("addProject in ProjectPage:", addProject);
    console.log("useProjects initialized");

    const person = {
        description: "Jeg er Halgeir Geirson, jeg er student på Høgskolen i Østfold og går studerer informatikk. Jeg har en brennende interesse for design og utvikling. I tillegg til studiene jobber jeg deltid som frilans utvikler. Jeg er kjent for å forstå kundenes behov og gjøre deres tanker til virkelighet. Jeg har en sterk arbeidsmoral og ønsker å lære mer, jeg er på utkikk etter nye muligheter for læring og bidra til nye spennende prosjekter.",
        image: "https://api.deepai.org/job-view-file/e2ba3201-cb3d-4e3a-bcd8-dd9bcaeb1a77/outputs/output.jpg?art-image=true",
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
          <Projects projects={projects} removeProject={removeProject} addProject={addProject} />

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
