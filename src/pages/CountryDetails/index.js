import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

import Header from '../../components/Header';

import api from '../../services/api';

import { Container } from './styles';

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

  if (!country) {
    return <h1>Loading Country</h1>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Container>
        <div className="goback">
          <Link to="/" className="goback-link">
            <FaArrowLeft />
            <p>Go Back</p>
          </Link>
        </div>

        <div key={country.name} className="country-container">
          <img src={country.flag} alt={country.name} />
          <div className="right-side">
            <h1>{country.name}</h1>
            <div className="country-infos">
              <div className="c1">
                <strong>
                  Native Name: <span>{country.nativeName}</span>
                </strong>
                <strong>
                  Population: <span>{country.population}</span>
                </strong>
                <strong>
                  Region: <span>{country.region}</span>
                </strong>
                <strong>
                  Sub Region: <span>{country.subregion}</span>
                </strong>
                <strong>
                  Capital: <span>{country.capital}</span>
                </strong>
              </div>
              <div className="c2">
                <strong>
                  Top Level Domain: <span>{country.topLevelDomain}</span>
                </strong>
                <strong>
                  Currencies:{' '}
                  <span>
                    {country.currencies.map((currency) => (
                      <span> {currency.name}.</span>
                    ))}
                  </span>
                </strong>
                <strong>
                  Languages:
                  {country.languages.map((language) => (
                    <span> {language.name}.</span>
                  ))}
                </strong>
              </div>
            </div>
            <div className="border-countries">
              <strong>Border Countries:</strong>
              {country.borders.map((border) => (
                <Link to={`/country/${border}`} className="border-link">
                  {border}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
