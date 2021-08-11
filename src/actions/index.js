import * as types from "./../constants/ActionTypes";

export const listProduct = (products) => {
  return {
    type: types.LIST_PRODUCT,
    products,
  };
};
