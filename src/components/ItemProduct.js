import React, { Component } from "react";
import { Link } from "react-router-dom";
class ItemProduct extends Component {
  onDelete = (id) => {
    this.props.onDelete(id);
  };

  render() {
    var { product, index } = this.props;
    return (
      <tr key={product.id}>
        <td>{index + 1}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.content}</td>
        <td>
          <Link to={"/product/edit/" + product.id}>
            <button className="edit-button" onClick={this.props.onUpdateForm}>
              Sửa
            </button>
          </Link>
          <button
            className="delete-button"
            onClick={() => {
              this.onDelete(product.id);
            }}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}
export default ItemProduct;
