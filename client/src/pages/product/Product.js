import React from "react";
import ProductContainer from "./ProductContainer";
import "./style.css";

const Product = (props) => {

  return (
    <div className="product-page">
    {/* Todo: Add history */}
    <ProductContainer  />
    </div>
  );
};

export default Product;