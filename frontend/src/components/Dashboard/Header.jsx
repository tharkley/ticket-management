// import { useState } from 'react';
import { useAuth } from '../../AuthContext';
import ProfileIcon from '../Icons/ProfileIcon';
import Dropdown from 'react-bootstrap/Dropdown';
import './Header.css';

const Header = () => {
  const { setIsLoggedIn } = useAuth();

  return (
    <header className="header">
      <input
        className="search-input"
        type="search"
        placeholder="Search tickets, customers, or keywords..."
      />
      <div className="profile-menu">
        <div className="profile-dropdown">
          <Dropdown autoClose>
            <Dropdown.Toggle variant="light" id="profile-menu-toggle" className="profile-toggle">
              <div className="profile-label">
                <div className="profile-icon-container">
                  <ProfileIcon />
                </div>
                <div className="profile-info">
                  <span className="profile-name">Taylor Crichton</span>
                  <span className="profile-role">Agent</span>
                </div>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item onClick={() => setIsLoggedIn(false)}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
