import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/product/add">
            <button className="add-button">Thêm sản phẩm</button>
          </Link>
        </div>
        <div>
          <ListProduct />
        </div>
      </div>
    );
  }
}
export default Index;
