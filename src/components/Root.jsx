import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

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
