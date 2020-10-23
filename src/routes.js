import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/country" exact component={CountryDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
