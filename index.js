import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getStore from './src/stores';

// Components & Routes
import Root from './src/components/Root';
import getRoutes from './src/routes';

ReactDOM.render(
  (
    <Provider store={getStore()}>
      <Root>
        {getRoutes()}
      </Root>
    </Provider>
  ),
  document.getElementById('root')
);
