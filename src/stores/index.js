import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const getStores = () => {
  const middlewares = [];

  const finalCreateStore = compose(
    ...middlewares
  )(createStore);
  return finalCreateStore(rootReducer, {});
};
export default getStores;
