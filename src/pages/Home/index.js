import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import Header from '../../components/Header';
import CountriesCard from '../../components/CountriesCard';

import api from '../../services/api';

import { Container } from './styles';

function Home() {
  const [theme, setTheme] = useState({ mode: 'light' });
  const [countries, setCountries] = useState([{}]);
  const [region, setRegion] = useState();
  const [country, setCountry] = useState();

  function toggleTheme() {
    setTheme(theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' });
  }

  useEffect(() => {
    async function getData() {
      await api.get('all').then((response) => {
        setCountries(response.data);
      });
    }
    getData();
  }, []);

  async function handleSearchForCountry(event) {
    event.preventDefault();
    await api.get(`name/${country}`).then((response) => {
      setCountries(response.data);
    });
  }

  async function handleSearchForRegion(event) {
    event.preventDefault();
    await api
      .get(`region/${region}`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => alert('Region data not available'));
  }

  if (!countries) {
    return <h1>Loading Countries</h1>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Container>
        <div className="container-search">
          <form onSubmit={handleSearchForCountry}>
            <div className="input-area">
              <button type="button" onClick={handleSearchForCountry}>
                <FaSearch color={theme.mode === 'dark' ? '#fff' : '#121212'} />
              </button>
              <input
                placeholder="Search for a Country"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </form>

          <form onSubmit={handleSearchForRegion}>
            <div className="input-area">
              <button type="button" onClick={handleSearchForRegion}>
                <FaSearch color={theme.mode === 'dark' ? '#fff' : '#121212'} />
              </button>
              <input
                placeholder="Search for a region"
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              />
            </div>
          </form>
        </div>
        <CountriesCard countries={countries} />
      </Container>
    </ThemeProvider>
  );
}

export default Home;
