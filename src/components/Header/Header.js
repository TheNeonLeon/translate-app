import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './HeaderStyle.css'
const Header = () => {
  const [user, setUser] = useUser();
  return (
  <div>
      <header>
          <h1 className='header-text'>Lost In Translation</h1>
          {user !== null &&
            <Link to="/profile">{user.username}</Link>
          }
      </header>
  </div>
  );
};

export default Header;
