
import {
    API_REQUEST,
    API_FAILURE,
    API_SUCCESS,
  } from '../action/actionConst';
  
  const initialState = {
   movies:[]
  };
  
  const homereducer = (state = initialState, action) => {
    switch (action.type) {
      case API_REQUEST:
        return {
          ...state,
        };
      case API_FAILURE:
        return {
          ...state,
          Post:action.data
        };
      case API_SUCCESS:
        return {
          ...state,
          Post:action.data
        };
      default:
        return state;
    }
  };
  
  export default homereducer;
  