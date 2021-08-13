import * as types from "./../constants/ActionTypes";
import callApi from "../utils/apiCaller";

export const listProduct = (products) => {
  return {
    type: types.LIST_PRODUCT,
    products,
  };
};

export const listProductRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      dispatch(listProduct(res.data));
    });
  };
};

export const addProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    product: product,
  };
};

export const addProductRequest = (product) => {
  return (dispatch) => {
    return callApi("products", "POST", product).then((res) => {
      dispatch(addProduct(res.data));
    });
  };
};

export const deleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id,
  };
};

export const deleteProductRequest = (id) => {
  return (dispatch) => {
    return callApi("products/" + id, "DELETE", null).then((res) => {
      dispatch(deleteProduct(id));
    });
  };
};

export const getProduct = (product) => {
  return {
    type: types.GET_PRODUCT,
    product,
  };
};

export const getProductRequest = (id) => {
  return (dispatch) => {
    return callApi("products/" + id, "GET", null).then((res) => {
      dispatch(getProduct(res.data));
    });
  };
};

export const updateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product,
  };
};

export const updateProductRequest = (product) => {
  return (dispatch) => {
    return callApi("products/" + product.id, "PUT", product).then((res) => {
      dispatch(updateProduct(res.data));
    });
  };
};
