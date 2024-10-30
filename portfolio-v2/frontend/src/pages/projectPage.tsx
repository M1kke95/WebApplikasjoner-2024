import { useState } from "react";
import Biografi from "../components/Biografi";
import Projects from "../components/Projects";
import CreateProject from "../components/CreateProject"; 
import useProjects from "../hooks/useProjects";


const ProjectPage = () => {
    const { projects, removeProject, addProject } = useProjects();
    const [isCreating, setIsCreating] = useState(false);
    console.log("addProject in ProjectPage:", addProject);
    console.log("useProjects initialized"); //
    const person = {
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
          <button onClick={toggleCreateProjectForm}>Legg til prosjekt</button>
          <Biografi person={person} />
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
