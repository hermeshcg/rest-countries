import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header';

import { Container } from './styles';

function Home() {
  const [theme, setTheme] = useState({ mode: 'dark' });

  const toggleTheme = () => {
    setTheme(theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header toggleTheme={toggleTheme} />
      </Container>
    </ThemeProvider>
  );
}

export default Home;
