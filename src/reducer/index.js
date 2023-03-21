import {combineReducers} from 'redux';

import homereducer from './homereducer';
import profilereducer from './profilereducer';

const rootReducer = combineReducers({
  homereducer: homereducer,
  profilereducer: profilereducer,
});

export default rootReducer;
