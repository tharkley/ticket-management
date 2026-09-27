import Nav from 'react-bootstrap/Nav';
import './Tabbar.css';

const Tabbar = () => {
  return (
    <div className="tabbar-container">
      <Nav className="tabbar">
        <Nav.Link>Dashboard</Nav.Link>
      </Nav>
    </div>
  );
};

export default Tabbar;
