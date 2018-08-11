import axios from 'axios';
const CancelToken = axios.CancelToken;

import {
  GET_FOOD_START,
  GET_FOOD_SUCCESS,
  GET_FOOD_ERROR,
} from '../../Constants';

axios.defaults.baseURL = 'http://demo2848805.mockable.io/';

let tokens = {

};

export const getFoodList = () => {
  return (dispatch, getState) => {
    dispatch({
      type: GET_FOOD_START
    });
    return axios.get('/foodList')
      .then((res) => {
        if (res.data && res.data.products && res.data.products.length) {
          dispatch({
            type: GET_FOOD_SUCCESS,
            payload: res.data.products,
          })
        } else {
          dispatch({
            type: GET_FOOD_ERROR,
          })
        }
      })
      .catch(e => {
        dispatch({
          type: GET_FOOD_ERROR,
        })
      })
  }
};

