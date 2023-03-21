import {PROFILE_API_REQUEST, PROFILE_API_SUCCESS, PROFILE_API_FAILURE} from './actionConst';
import axios from 'axios';

const apiRequested = () => ({
  type: PROFILE_API_REQUEST,
});

const apiSuccess = data => ({
  type: PROFILE_API_SUCCESS,
  data,
});

const apiFailure = data => ({
  type: PROFILE_API_FAILURE,
  data,
});

export const hitProfileAPI = () => dispatch => {
  dispatch(apiRequested);
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response =>  {
      dispatch(apiSuccess(response.data));
    })
    .catch(error => {
      console.log('hitAPI', 'json error is---' + error);
      dispatch(apiFailure(error));
    });
};
