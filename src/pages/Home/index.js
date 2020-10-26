import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import Select from 'react-select';

import Header from '../../components/Header';

import api from '../../services/api';

import { Container } from './styles';
import { Link } from 'react-router-dom';

function Home() {
  const [theme, setTheme] = useState({ mode: 'dark' });
  const [countries, setCountries] = useState([{}]);
  /*  const [country, setCountry] = useState('');
  const [contentSelectedCountry, setContentSelectedCountry] = useState({});
  const [region, setRegion] = useState('');
  const [contentSelectedRegion, setcontentSelectedRegion] = useState([{}]);
 */
  const options = [
    { value: 'africa', label: 'Africa' },
    { value: 'america', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
  ];

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

  /* async function handleSearchForCountry(event) {
    event.preventDefault();
    const response = await api.get(`name/${country}`);
    const data = response.data;
    setContentSelectedCountry(data);
  }

  async function handleSearchByRegion(event) {
    event.preventDefault();
    const response = await api.get(`region/${region.value}`);
    const data = response.data;
    setcontentSelectedRegion(data);
    setCountries(contentSelectedRegion);
  }
  console.log({ contentSelectedRegion, region });
 */
  const customStyles = {
    placeholder: (base) => ({
      ...base,
      color: '#fff',
      fontFamily: 'Nunito, sans-serif',
    }),
    control: (base, state) => ({
      ...base,
      background: 'hsl(209, 23%, 22%)',
      // match with the menu
      borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
      // Overwrittes the different states of border
      color: '#fff',
      border: 'none',
      // Removes weird border around container
      width: '200px',
      height: '100%',
    }),
    option: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
      width: '200px',
      fontFamily: 'Nunito, sans-serif',
      color: '#ccc',
      background: 'hsl(207, 26%, 17%)',
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Container>
        <div className="container-search">
          <form /* onSubmit={handleSearchForCountry} */ className="input-area">
            <FaSearch color={theme.mode === 'dark' ? '#fff' : '#121212'} />
            <input
              type="text"
              placeholder="Search for a country"
              /*               onChange={(e) => {
                setCountry(e.target.value);
              }} */
            />
          </form>

          <form /* onSubmit={handleSearchByRegion} */>
            <div className="search-by-region">
              <Select
                options={options}
                styles={customStyles}
                placeholder="Select region"
                isSearchable
                /*onChange={setRegion} */
              />
            </div>
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
