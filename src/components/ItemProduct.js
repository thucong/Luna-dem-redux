import React, { Component } from "react";

class ItemProduct extends Component {
  render() {
    var { product, index } = this.props;
    return (
      <tr key={product.id}>
        <td>{index + 1}</td>
        <td className="display">{product.name}</td>
        <td>{product.price}</td>
        <td>
          <button className="edit-button">Sửa</button>

          <button className="delete-button">Xóa</button>
        </td>
      </tr>
    );
  }
}
export default ItemProduct;
