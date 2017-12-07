import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <Link to="/home">Home</Link>
    <br />
    <Link to="/developers">Developers</Link>
  </div>
);

export default Header;
