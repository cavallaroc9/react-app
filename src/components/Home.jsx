import React, { Component } from 'react';

import DisplayList from '../components/DisplayList';

const Home = (props) => {
  const { developerList, userName, changeName } = props;
  const onChange = event => {
    changeName(event.target.value || '');
  };

  return (
    <div>
      <h1>{`Hello ${userName || 'HEY'} !!!`}</h1>
      <input value={userName} onChange={onChange} type="text" />
      {developerList.length === 0 ? null : <h2>List of Developers</h2>}
      <DisplayList list={developerList} />
    </div>
  );
};

export default Home;

Home.defaultProps = {
  developerList: [],
  userName: '',
  changeName: () => {}
};
