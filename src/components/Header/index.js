import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header({ toggleTheme }) {
  return (
    <Container>
      <Link to="/" className="linkTitle">
        Where in the world
      </Link>
      <div className="theme" onClick={toggleTheme}>
        <FaMoon
          color={(props) => (props.theme.mode === 'dark' ? '#fff' : '#121212')}
        />
        <p>Dark Mode</p>
      </div>
    </Container>
  );
}

export default Header;
