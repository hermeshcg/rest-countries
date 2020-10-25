import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from '../../components/Header';

import api from '../../services/api';

import { Container } from './styles';

function Home() {
  const { name } = useParams();
  const [theme, setTheme] = useState({ mode: 'dark' });

  useEffect(() => {
    api.get(`name/${name}`).then((response) => {
      const data = response.data;
      console.log(data);
    });
  }, [name]);

  const toggleTheme = () => {
    setTheme(theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' });
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Container></Container>
    </ThemeProvider>
  );
}

export default Home;
