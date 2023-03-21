
import {
    PROFILE_API_REQUEST,
    PROFILE_API_FAILURE,
    PROFILE_API_SUCCESS,
  } from '../action/actionConst';
  
  const initialState = {
   data:[]
  };
  
  const profilereducer = (state = initialState, action) => {
    switch (action.type) {
      case PROFILE_API_REQUEST:
        return {
          ...state,
        };
      case PROFILE_API_FAILURE:
        return {
          ...state,
          data:action.data
        };
      case PROFILE_API_SUCCESS:
        return {
          ...state,
          data:action.data
        };
      default:
        return state;
    }
  };
  
  export default profilereducer;
  