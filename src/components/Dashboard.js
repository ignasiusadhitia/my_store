import React, { Component } from "react";
import { withAuth } from "../context/AuthContext";
import { getInitialData } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import ProductsList from "./ProductsList";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: getInitialData(),
    };

    this.onDeleteProduct = this.onDeleteProduct.bind(this);
  }

  onDeleteProduct(id) {
    const products = this.state.products.filter((product) => product.id !== id);
    this.setState({ products });
  }

  render() {
    return (
      <>
        <Header />
        <ProductsList
          className="mystore-app__body"
          products={this.state.products}
          onDelete={this.onDeleteProduct}
        />
        <Footer />
      </>
    );
  }
}

export default withAuth(Dashboard);
