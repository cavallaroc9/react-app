import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ searchDevelopers, searchName }) => {
  const changeSearch = (event) => {
    searchDevelopers(event.target.value);
  };

  return (
    <div>
      <Link to="/home">Home</Link>{' '}
      <Link to="/developers">Developers</Link>{' '}
      <span>{'Search for developers :'}</span>
      <input value={searchName} onChange={changeSearch} type="search"/>
    </div>
  );
};

Header.defaultProps = {
  searchName: '',
  searchDevelopers: () => {}
};

export default Header;