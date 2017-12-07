import _ from 'lodash';
import { ADD_DEVELOPER, CLEAR_DEVELOPERS, UPDATE_SEARCH } from '../actions/developersAction';

const initialState = {
  developerList: [],
  displayDeveloperList: [],
  searchName: ''
};

const filterDevelopersByName = (searchName = '', developerList = []) => {
  return developerList.filter(developer => _.startsWith(developer, searchName));
};

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_DEVELOPER:
      const updatedDeveloperList = [
        ...state.developerList,
        action.newDeveloper
      ];

      return {
        ...state,
        developerList: updatedDeveloperList,
        displayDeveloperList: filterDevelopersByName(state.searchName, updatedDeveloperList)
      };
    case CLEAR_DEVELOPERS:
      return {
        ...state,
        developerList: []
      };
    case UPDATE_SEARCH:
      return {
        ...state,
        searchName: action.name,
        displayDeveloperList: filterDevelopersByName(action.name, state.developerList)
      };
    default:
      return state;
  }
};
