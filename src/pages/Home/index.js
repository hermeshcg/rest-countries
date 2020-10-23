import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import Select from 'react-select';

import Header from '../../components/Header';

import api from '../../services/api';

import { Container } from './styles';
import { Link } from 'react-router-dom';

function Home() {
  const options = [
    { value: 'africa', label: 'Africa' },
    { value: 'america', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
  ];

  const [theme, setTheme] = useState({ mode: 'dark' });
  const [countries, setCountries] = useState([{}]);

  const toggleTheme = () => {
    setTheme(theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' });
  };

  useEffect(() => {
    api.get('all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  console.log(countries);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Container>
        <div className="container-search">
          <div className="input-area">
            <FaSearch color={theme.mode === 'dark' ? '#fff' : '#121212'} />
            <input type="text" placeholder="Search for a country" />
          </div>

          <div className="search-by-region">
            <Select options={options} />
          </div>
        </div>

        <div className="countries-container">
          {countries.map((country) => (
            <div key={country.name} className="country-card">
              <Link to="/">
                <img src={country.flag} alt={country.name} />
              </Link>
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
            </div>
          ))}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
