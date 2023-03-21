import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/index';
const configStore = () => {
  const store = createStore(
    reducer,
    {},
    compose(applyMiddleware(thunk)),
  );
  return store;
};
export default configStore;
