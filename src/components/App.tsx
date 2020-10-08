// eslint-disable-next-line
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Landing from '../pages/Landing';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/Landing" component={Landing} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
