import * as types from "./../constants/ActionTypes";

var initialState = []
var findIndex = (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    if(product.id === id) result = index
  })
  return result;
}
var myReducer = (state = initialState, action) => {
  var index = -1;
  var {id} = action;
  switch (action.type) {
    case types.LIST_PRODUCT:
      state = action.products;
      return [...state];
    case types.ADD_PRODUCT:
      // console.log(action);
      // var newProduct = {
      //   id: randomId(),
      //   name: action.product.name,
      //   price: action.product.price,
      //   content: action.product.content,
      // }
      // console.log(newProduct);
     // state.push(newProduct);
      
     // localStorage.setItem('products', JSON.stringify(state));
     // return [...state]
     state.push(action.product);
     return [...state];
    case types.DELETE_PRODUCT:
      index = findIndex(state,id);
      state.splice(index,1);
      return [...state];
    default:
      return state;
  }
};
export default myReducer;
