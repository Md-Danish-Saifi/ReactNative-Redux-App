import {API_FAILURE, API_SUCCESS, API_REQUEST} from './actionConst';

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
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      //apicallback(json);
      dispatch(apiSuccess(json));
    })
    .catch(error => {
      console.log('hitAPI', 'json error is---' + error);
      dispatch(apiFailure(error));
    });
};
