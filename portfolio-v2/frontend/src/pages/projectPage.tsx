import Biografi from "../components/Biografi";
import Projects from "../components/Projects";
import useProjects from "../hooks/useProjects";


const ProjectPage = () => {
    const { projects, removeProject } = useProjects();

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
    
    return (
        <main id="mainSection">
          <div id="app"></div>
          <Projects projects={projects} removeProject={removeProject} />
          <Biografi person={person} />
        </main>
      );
}
export default ProjectPage