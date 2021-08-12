import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from ".//../actions/index";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      content: "",
      displayAddForm: false,
    };
  }
  onHandleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    var {id, name, price, content } = this.state;
    var product = {
      id: id,
      name: name,
      price: price,
      content: content,
    }
    this.props.addProduct(product);
    this.setState({
      name: "",
      price: "",
      content: "",
    });
    this.props.CloseForm();
  };
  render() {
    var { name, price, content } = this.state;
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <form>
            <span className="close" onClick={this.props.CloseForm}>
              &times;
            </span>
            <h2>Thêm sản phẩm</h2>
            <div className="fomrgroup">
              <b>Tên sản phẩm:</b>
              <input
                type="text"
                name="name"
                placeholder="Tên sản phẩm"
                value={name}
                onChange={this.onHandleChange}
              />
            </div>
            <div className="fomrgroup">
              <b>Giá sản phẩm (VNĐ):</b>
              <input
                type="text"
                name="price"
                placeholder="Giá sản phẩm"
                value={price}
                onChange={this.onHandleChange}
              />
            </div>
            <div className="fomrgroup">
              <b>Mô tả sản phẩm:</b>
              <textarea
                name="content"
                placeholder="Mô tả sản phẩm"
                value={content}
                onChange={this.onHandleChange}
              ></textarea>
            </div>
            <div className="fomrgroup">
              <button className="add-button" onClick={this.onSubmit}>Thêm</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch, props) => {
  return {
    addProduct: (product) => {
      dispatch(actions.addProductRequest(product));
    },
  };
};
export default connect(null, mapDispatchToProps)(AddProduct);
