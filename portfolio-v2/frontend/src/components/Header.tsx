import { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateProject from './CreateProject';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };

  const closeForm = () => {
    setIsVisible(false);
  };

  const addNewProject = (project: any) => {
    
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Hjem</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
          <li><button onClick={toggleVisible}>CreateProject</button></li>
        </ul>
      </nav>
      {isVisible && (
        <>
          <div id="overlay" onClick={closeForm} />
          <div className="centered-form">
            <CreateProject addNewProject={addNewProject} closeForm={closeForm} />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
