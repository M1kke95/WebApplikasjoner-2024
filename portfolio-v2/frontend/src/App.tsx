import './App.css';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProjectPage from './pages/projectPage';
import AllProjects from './components/AllProjects';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProjectPage />} />
          <Route path="/projects" Component={AllProjects}/>
          <Route path="/contact" element={<Contact email="student@hiof.no" />} />
        </Routes>
      </Layout>
    </Router>
  );
}



