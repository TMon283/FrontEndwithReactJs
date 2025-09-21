import React from "react";
import "./App.css"
import ListProduct from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
export default function App() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      <div className="row">
        {/* san pham */}
        <ListProduct></ListProduct>
        {/* thanh toan */}
        <ShoppingCart></ShoppingCart>
      </div>
    </div>
  );
}
