import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import App from '../components/App';
import Developers from '../components/Developers';
import Error from '../components/Error';

const getRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/developers" />
    </Route>
    <Route path="/app" component={App}/>
    <Route path="/developers" component={Developers}/>
    <Route component={Error}/>
  </Switch>
);

export default getRoutes;