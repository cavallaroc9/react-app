import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import Developers from './src/Developers';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// import { Switch, Route } from 'react-router'

const Root = ({ children }) => {
  return (
    <BrowserRouter>
      <div>
        {children}
      </div>
    </BrowserRouter>
  )
};

const getRoutes = () => (
  <Switch>
  <Route exact path="/">
    <Redirect to="/developers" />
  </Route>
  <Route path="/app" component={App}/>
  <Route path="/developers" component={Developers}/>
  <Route component={App}/>
  </Switch>
);


ReactDOM.render(
  <div>
  <Root>
    {getRoutes()}
  </Root>
  </div>,
  document.getElementById('root')
);
