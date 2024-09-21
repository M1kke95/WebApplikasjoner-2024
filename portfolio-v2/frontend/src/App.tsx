import Projects from './components/Projects';
import './App.css';
import Biografi from './components/Biografi';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import { useState } from 'react';
import {ProjectProps} from './components/Project'
import CreateProject from './components/CreateProject';

function App() {
    
  const projectList: ProjectProps[] = [
    {
      id: "1",
      name: "Project 1",
      description: "Description of project 1",
      startDate: "01.01.2023",
      endDate: "01.02.2023",
      imageUrl: "https://example.com/image1.jpg"
    },
    {
      id: "2",
      name: "Project 2",
      description: "Description of project 2",
      startDate: "02.01.2023",
      endDate: "02.02.2023",
      imageUrl: "https://example.com/image2.jpg"
    },
  ];

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

  const [projects, setProjects] = useState<ProjectProps[]>(projectList);

  const addNewProject = (newProject: ProjectProps) => {
    setProjects((existingProjects) => [...existingProjects, newProject]);
    console.log([...projects, newProject]);
  };

  return (
    <>
    <Router>
      <nav>
        <Link to="/">Hjem</Link>
        <Link to="/contact">kontakt</Link>
      </nav>
        <Routes>
          <Route path='/' element= {
            <>
          <Projects projects={projects} />
          <Biografi person={person} />
          <CreateProject addNewProject={addNewProject}/>
          </>
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
