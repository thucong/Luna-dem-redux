import React, { Component } from "react";

class ItemProduct extends Component {
  onDelete = (e,id) => {
    
      this.props.onDelete(id);
    
  }
  render() {
    var { product, index } = this.props;
    console.log(product.id);
    return (
      <tr key={product.id}>
        <td>{index + 1}</td>
        <td className="display">{product.name}</td>
        <td>{product.price}</td>
        <td>
          <button className="edit-button">Sửa</button>

          <button className="delete-button" onClick={(e) => this.onDelete(product.id)}>Xóa</button>
        </td>
      </tr>
    );
  }
}
export default ItemProduct;
