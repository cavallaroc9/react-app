import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const Root = ({ children }) => {
  return (
    <BrowserRouter>
      <div>
        {children}
      </div>
    </BrowserRouter>
  )
};

export default Root;