import React, { useState } from 'react';

import GlobalStyle from './styles/global';

import Routes from './routes';
import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, setTheme] = useState({ mode: 'dark' });

  const toggleTheme = () => {
    setTheme(theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' });
  };
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
