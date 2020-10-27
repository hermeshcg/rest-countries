import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function CountriesCard({ countries }) {
  return (
    <Container>
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
  );
}

export default CountriesCard;
