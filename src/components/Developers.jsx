import React, { Component } from 'react';

import DisplayList from './DisplayList';
import AddItem from './AddItem';

class Developers extends Component {
  constructor() {
    super();
    this.state = {
      developerList: []
    };
  }

  addDeveloper = newDeveloper => {
    this.setState({
      ...this.state,
      developerList: [
        ...this.state.developerList,
        newDeveloper
      ]
    });
  }

  render = () => {
    return (
      <div>
        <h1>Developers!</h1>
        <DisplayList list={this.state.developerList} />
        <AddItem itemName={'developer'} addItem={this.addDeveloper} />
      </div>
    );
  }
}

export default Developers;
