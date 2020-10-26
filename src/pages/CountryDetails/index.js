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
  const [country, setCountry] = useState([{}]);

  useEffect(() => {
    api.get(`name/${name}`).then((response) => {
      const data = response.data;
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
        <div className="goback">
          <Link to="/" className="goback-link">
            <FaArrowLeft />
            <p>Go Back</p>
          </Link>
        </div>

        <div className="country-container">
          {country.map((country) => (
            <>
              <img src={country.flag} alt={country.name} />

              <div className="right-side">
                <h1>{country.name}</h1>
                <div className="country-content">
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
                      Currencies: <span>that</span>
                    </strong>
                    <strong>
                      Languages: <span>{''}</span>
                    </strong>
                  </div>
                </div>
                <div className="border-coutries">
                  <strong>Border Countries:</strong>
                  <Link to={`/${country.name}`}>{country.name}</Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
