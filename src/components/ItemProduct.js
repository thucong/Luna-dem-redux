import React, { Component } from "react";

class ItemProduct extends Component {
  onDelete = (id) => {
    this.props.onDelete(id);
  }
  render() {
    var { product, index } = this.props;

    return (
      <tr key={product.id}>
        <td>{index + 1}</td>
        <td className="display">{product.name}</td>
        <td>{product.price}</td>
        <td>
          <button className="edit-button">Sửa</button>

          <button className="delete-button" onClick={ () => {this.onDelete(product.id)}}>Xóa</button>
        </td>
      </tr>
    );
  }
}
export default ItemProduct;
