import { Link } from 'react-router-dom';
import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;