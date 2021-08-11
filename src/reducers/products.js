import * as types from "./../constants/ActionTypes";

var initialState = {
  products: [],
};
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_PRODUCT:
      state = action.products;
      return state;
    default:
      return state;
  }
};
export default myReducer;
