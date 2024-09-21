import Projects from './components/Projects';
import './App.css';
import Biografi from './components/Biografi';

function App() {
  const projectList = [
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

  return (
    <>
      <Projects projects={projectList} />
      <Biografi person={person} />
    </>
  );
}

export default App;
