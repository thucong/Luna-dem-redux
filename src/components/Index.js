import React, { Component } from "react";
import AddProduct from "./AddProduct";
import ListProduct from "./ListProduct";

class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      displayAddForm: false,
      
    }

  }
  onAddForm = () => {
    this.setState({displayAddForm: true});
  }
  CloseForm = () => {
    this.setState({displayAddForm: false});
  }
  render() {
    return (
      <div className="container">
        <div>
          <h1>Thông tin sản phẩm</h1>
        </div>
        <hr />
        <div>
          <button className="add-button" onClick={this.onAddForm}>Thêm sản phẩm</button>
        </div>
        {this.state.displayAddForm ? (<div><AddProduct CloseForm={this.CloseForm}/></div>) : ""}
        <div>
          <ListProduct />
        </div>
      </div>
    );
  }
}
export default Index;
