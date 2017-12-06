import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import App from '../components/App';
import DevelopersContainer from '../containers/DevelopersContainer';
import Error from '../components/Error';

const getRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/app" />
    </Route>
    <Route path="/app" component={App}/>
    <Route path="/developers" component={DevelopersContainer}/>
    <Route component={Error}/>
  </Switch>
);

export default getRoutes;
