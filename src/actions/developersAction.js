export const ADD_DEVELOPER = 'addDeveloper';
export const CLEAR_DEVELOPERS = 'clearDevelopers';

export const addDeveloper = newDeveloper => ({
  type: ADD_DEVELOPER,
  newDeveloper
});

export const clearDevelopers = () => ({ type: CLEAR_DEVELOPERS });