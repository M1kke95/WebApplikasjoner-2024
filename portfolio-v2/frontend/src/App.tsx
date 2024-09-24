import Projects from './components/Projects';
import './App.css';
import Biografi from './components/Biografi';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {ProjectProps} from './components/Project'
import CreateProject from './components/CreateProject';
import Header from './components/Header';

function App() {
 
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('http://localhost:3999/projects')
      const data = await response.json();
      setProjects(data)
    }

    fetchProjects()
   }, [])

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


  const addNewProject = (newProject: ProjectProps) => {
    setProjects((existingProjects) => [...existingProjects, newProject]);
    console.log([...projects, newProject]);
  };

  const removeProject = (id: string) =>{
    setProjects((existingProjects) => existingProjects.filter(project => project.id !== id))
  }

  return (
    <>
    <Router>
      <Header  />
        <Routes>
          <Route path='/' element= {
            <body>
            <main id='mainSection'>
            <div id='app'></div>
          <Projects projects={projects} removeProject={removeProject} />
          <Biografi person={person} />
          <CreateProject addNewProject={addNewProject}/>
          </main>
          </body>
          }/>
          <Route path='/contact' element ={
            <Contact email={person.email} />
          }/>
      </Routes>
     
    </Router>
    </>
  );
}

export default App;
