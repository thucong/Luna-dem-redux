import React, { Component } from "react";
import ItemProduct from "./ItemProduct";
import { connect } from "react-redux";
import * as actions from ".//../actions/index";

class ListProduct extends Component {
  
  listProduct = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ItemProduct key={product.id} product={product} index={index} onDelete={this.onDelete} />;
      });
    }
    return result;
  };
  componentDidMount(){
   this.props.listProductRequest();
  }
  onDelete = (id) => {
    this.props.deleteProduct(id);
  }
  render() {
    var products = this.props.products;
    return (
      <div>
        <table className="content">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Giá sản phẩm</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>{this.listProduct(products)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    listProductRequest: () => {
      return dispatch(actions.listProductRequest());
    },
    deleteProduct: (id) => {
      dispatch(actions.deleteProductRequest(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
