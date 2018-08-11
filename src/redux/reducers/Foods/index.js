import {
  STATUS,
  GET_FOOD_START,
  GET_FOOD_SUCCESS,
  GET_FOOD_ERROR,
} from '../../Constants'

export default (state = {
  foodList: [],
}, action) => {
  switch (action.type) {
    case GET_FOOD_START:
      return Object.assign({}, state, { getFoodStatus: STATUS.LOADING });
    case GET_FOOD_SUCCESS:
      return Object.assign({}, state, { getFoodStatus: STATUS.SUCCESS, foodList: action.payload });
    case GET_FOOD_ERROR:
      return Object.assign({}, state, { getFoodStatus: STATUS.ERROR });
    default:
      return state;
  }
};