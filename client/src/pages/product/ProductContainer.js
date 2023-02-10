import React from 'react'
import { Divider } from "@mui/material";
import ProductContact from './ProductContact';
import ProductDetails from './ProductDetails';

const ProductContainer = props => {
  return (
    <div className='product-container'>
      <div className='product-img'>
       {/* Todo: update alt with product id */}
      <img alt='product_img' src='https://apollo-singapore.akamaized.net/v1/files/r8i176uj2obj2-IN/image;s=780x0;q=60' />
      </div>
      <div className='product-headline-dsktp'>
      <div className='product-headline'>
      <h2>APPLE IPHONE 11 PRO</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
      </div>
      <div className='product-bill'>
      <h2>₹ 25,000</h2>
      <p>This price is negotiable.</p>
      </div>
      <Divider sx={{ width: { xs: 90 + "%", md: 100+ "%"}, m: "0 auto" }} />
      <ProductContact />
      <Divider sx={{ width: { xs: 90 + "%", md: 100+ "%"}, m: "0 auto"}} />
      <ProductDetails />
      </div>
    </div>
  )
}

export default ProductContainer

// <div className='product-heading'>
// <h1 className='product-name'>APPLE IPHONE 11 PRO</h1>
// <p>In proper condition and working smoothly!</p>
// </div>
// <div>
// <h2 className='product-price'>₹ 25000</h2>
// <p>This price is negotiable.</p>
// </div>
//<Divider sx={{ width: 100 + "%", m: "0 auto", mt: -1 }} />