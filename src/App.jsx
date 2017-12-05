import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'HEY'
    }
  };

  changeName = event => {
    this.setState({
      name: event.target.value
    })
  };

  render() {
    return (
      <div>
        <h1>{`Hello ${this.state.name} !!!`}</h1>
        <input onChange={this.changeName} type="text" />
      </div>
    );
  }
};

export default App;
