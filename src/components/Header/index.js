import React from 'react';
import { FaMoon } from 'react-icons/fa';

import { Container } from './styles';

function Header({ toggleTheme }) {
  return (
    <Container>
      <h1>Where in the world</h1>
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
