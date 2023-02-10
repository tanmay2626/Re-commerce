import { Divider } from "@mui/material";
import React from "react";
import ProductContainer from "./ProductContainer";
import "./style.css";

const Product = (props) => {
  return (
    <div className="product-page">
    <ProductContainer />
    <Divider sx={{ width: 90+"%", m: "0 auto", mt: 4 }} textAlign="left">Related Products</Divider>
    </div>
  );
};

export default Product;

      // {/* history */}
      // <ProductContainer />
      // {/* <Divider sx={{ width: 100 + "%", m: "0 auto", mt: 2 }} /> */}