import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import Header from '../../components/Header';

import api from '../../services/api';

import { Container } from './styles';
import { Link } from 'react-router-dom';

function Home() {
  const [theme, setTheme] = useState({ mode: 'dark' });
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
    await api.get(`region/${region}`).then((response) => {
      setCountries(response.data);
    });
  }

  if (!countries) {
    return <h1>Loading Countries</h1>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Container>
        <div className="container-search">
          <form className="input-area" onSubmit={handleSearchForCountry}>
            <FaSearch color={theme.mode === 'dark' ? '#fff' : '#121212'} />
            <input
              placeholder="Search for a Country"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </form>

          <form className="input-area" onSubmit={handleSearchForRegion}>
            <FaSearch color={theme.mode === 'dark' ? '#fff' : '#121212'} />
            <input
              placeholder="Search for a region"
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
          </form>
        </div>

        <div className="countries-container">
          {countries.map((country) => (
            <Link
              to={`/country/${country.name}`}
              key={country.name}
              className="country-card"
            >
              <img src={country.flag} alt={country.name} />

              <h5>{country.name}</h5>
              <strong>
                Population: <span>{country.population}</span>
              </strong>
              <strong>
                Region: <span>{country.region}</span>
              </strong>
              <strong>
                Capital: <span>{country.capital}</span>
              </strong>
            </Link>
          ))}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
