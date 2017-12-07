import { CHANGE_NAME } from '../actions/nameAction';

const initialState = {
  name: ''
};

export default (state = initialState, { type = '', name = '' }) => {
  if (type === CHANGE_NAME) {
    return {
      ...state,
      name
    };
  }

  return state;
}