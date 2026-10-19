import React, { Component } from "react";

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

class ProductList extends Component {
  render() {
    const listItems = products.map((product) => (
      <li
        key={product.id}
        style={{
          color: product.isFruit ? "magenta" : "darkgreen",
        }}
      >
        {product.title}
      </li>
    ));
    return (
      <>
        <h1>Products</h1>
        <ul>{listItems}</ul>
      </>
    );
  }
}

export default ProductList;
