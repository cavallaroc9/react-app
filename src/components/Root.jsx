import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Containers
import Header from '../containers/HeaderContainer';

const Root = ({ children }) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {children}
      </div>
    </BrowserRouter>
  )
};

export default Root;
