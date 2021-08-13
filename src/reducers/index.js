import { combineReducers } from "redux";
import products from "./products";
import updateProduct from "./updateProduct";

const myReducer = combineReducers({
  products, // products: products
  updateProduct,
});

export default myReducer;
