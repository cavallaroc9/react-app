import { clearDevelopers } from './developersAction';

export const CHANGE_NAME = 'CHANGE_NAME';

const updateName = name => {
  return {
    type: CHANGE_NAME,
    name
  }
};

export const changeName = name => {
  return dispatch => {
    dispatch(updateName(name));
    dispatch(clearDevelopers());
  }
};