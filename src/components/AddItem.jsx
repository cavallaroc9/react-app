import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddItem extends Component {
  render = () => {
    const { itemName, addItem } = this.props;
    const onClickHandler = event => {
      addItem(this.newItemInput.value);
      this.newItemInput.value = '';
    };

    return (
      <div>
        <span>Add new {itemName}</span>
        <input type="text" ref={ input => this.newItemInput = input }/>
        <button onClick={onClickHandler}>Add</button>
      </div>
    );
  }
}

AddItem.defaultProps = {
  itemName: '',
  addItem: () => {}
};

AddItem.PropTypes = {
  itemName: PropTypes.string,
  addItem: PropTypes.func
};

export default AddItem;