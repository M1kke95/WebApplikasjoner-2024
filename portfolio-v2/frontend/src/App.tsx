import './App.css';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProjectPage from './pages/projectPage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact email="student@hiof.no" />} />
        </Routes>
      </Layout>
    </Router>
  );
}



