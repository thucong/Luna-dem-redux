import React, { Component } from "react";
import ListProduct from "./ListProduct";

class Index extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1>Thông tin sản phẩm</h1>
        </div>
        <hr />
        <div>
          <button className="add-button">Thêm sản phẩm</button>
        </div>

        <div>
          <ListProduct />
        </div>
      </div>
    );
  }
}
export default Index;
