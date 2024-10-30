import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Hjem</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
