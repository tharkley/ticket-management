import { useState } from 'react';
import { useAuth } from '../../AuthContext';
import ArrowIcon from '../Icons/ArrowIcon';
import ProfileIcon from '../Icons/ProfileIcon';
import './Header.css';

const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };
  const { setIsLoggedIn } = useAuth();
  return (
    <header className="header">
      <input
        className="search-input"
        type="search"
        placeholder="Search tickets, customers, or keywords..."
        icon="search"
      />
      <div className="profile-menu">
        <div className="profile-label" onClick={handleProfileClick}>
          <div className="profile-icon-container">
            <ProfileIcon />
          </div>
          <div className="profile-info">
            <span className="profile-name">Taylor Crichton</span>
            <span className="profile-role">Agent</span>
          </div>
          <ArrowIcon />
        </div>
        {isProfileMenuOpen && (
          <div className="profile-dropdown">
            <ul>
              <li>Profile</li>
              <li onClick={() => setIsLoggedIn(false)}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
