import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MdRotateRight } from 'react-icons/md';

import Header from '../../components/Header';

import api from '../../services/api';

import { Container } from './styles';
import CountryDetailsCard from '../../components/CountryDetailsCard';

function Home() {
  const { name } = useParams();
  const [theme, setTheme] = useState({ mode: 'dark' });
  const [country, setCountry] = useState();

  useEffect(() => {
    api.get(`name/${name}`).then((response) => {
      const data = response.data[0];
      setCountry(data);
    });
  }, [name]);

  function toggleTheme() {
    setTheme(theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' });
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Container>
        {!country ? (
          <MdRotateRight />
        ) : (
          <CountryDetailsCard country={country} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default Home;
