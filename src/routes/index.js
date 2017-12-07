import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';
import DevelopersContainer from '../containers/DevelopersContainer';
import Error from '../components/Error';

const getRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route path="/home" component={HomeContainer}/>
    <Route path="/developers" component={DevelopersContainer}/>
    <Route component={Error}/>
  </Switch>
);

export default getRoutes;
