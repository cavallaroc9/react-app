import React from 'react';

import DisplayList from './DisplayList';
import AddItem from './AddItem';

const Developers = ({ developerList, addDeveloper }) => {
  return (
    <div>
      <h1>Developers!</h1>
      <DisplayList list={developerList} />
      <AddItem itemName={'developer'} addItem={addDeveloper} />
    </div>
  );
}

Developers.defaultProps = {
  developerList: [],
  addDeveloper: () => {}
}

export default Developers;
