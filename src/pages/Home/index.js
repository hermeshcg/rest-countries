import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import Select from 'react-select';

import Header from '../../components/Header';

import api from '../../services/api';

import { Container } from './styles';
import { Link } from 'react-router-dom';

function Home() {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

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
            <Select options={options} styles={customStyles} />
          </div>
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
