import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function CountryDetailsCard({ country }) {
  return (
    <Container>
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
  );
}

export default CountryDetailsCard;
