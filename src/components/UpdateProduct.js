import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from ".//../actions/index";

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      content: "",
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

  componentDidMount() {
    var match = this.props.match;
    if (match) {
      var id = match.params.id;
      this.props.onGetProduct(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.updateProduct) {
      var updateProduct = nextProps.updateProduct;
      this.setState({
        id: updateProduct.id,
        name: updateProduct.name,
        price: updateProduct.price,
        content: updateProduct.content,
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    var { id, name, price, content } = this.state;
    var product = {
      id: id,
      name: name,
      price: price,
      content: content,
    };
    if (id) {
      this.props.onUpdateProduct(product);
    }
    this.props.history.push("/");
  };

  render() {
    var { name, price, content } = this.state;
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <form>
            <Link to="/">
              <span className="close">&times;</span>
            </Link>
            <h2>Sửa sản phẩm</h2>
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
              <button className="add-button" onClick={this.onSubmit}>
                Sửa
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    updateProduct: state.updateProduct,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetProduct: (id) => {
      dispatch(actions.getProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actions.updateProductRequest(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct);
