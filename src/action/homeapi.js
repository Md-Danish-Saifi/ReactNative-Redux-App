import {API_FAILURE, API_SUCCESS, API_REQUEST} from './actionConst';
import axios from 'axios';

const apiRequested = () => ({
  type: API_REQUEST,
});

const apiSuccess = data => ({
  type: API_SUCCESS,
  data,
});

const apiFailure = data => ({
  type: API_FAILURE,
  data,
});

export const hitAPI = () => dispatch => {
  dispatch(apiRequested);
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
      //apicallback(json);
      dispatch(apiSuccess(response.data));
    })
    .catch(error => {
      console.log('hitAPI', 'json error is---' + error);
      dispatch(apiFailure(error));
    });
};
