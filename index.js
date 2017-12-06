import React from 'react';
import ReactDOM from 'react-dom';

// Components & Routes
import Root from './src/components/Root';
import getRoutes from './src/routes';

ReactDOM.render(
  (<Root>
    {getRoutes()}
  </Root>),
  document.getElementById('root')
);
