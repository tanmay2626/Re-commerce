import React from 'react'
import { Divider } from "@mui/material";
import ProductContact from './ProductContact';
import ProductDetails from './ProductDetails';
import { useStateValue } from "../../context/StateProvider"

const ProductContainer = (props) => {
  const [currentItem] = useStateValue()
const data = currentItem.currentItem


  return (
    <div className='product-container'>
      <div className='product-img'>
       {/* Todo: update alt with product id */}
      <img alt={data.product_id} src={data.img_url} />
      </div>
      <div className='product-headline-dsktp'>
      <div className='product-headline'>
      <h2>{data.product_name}</h2>
      <p>{data.desc}</p>
      </div>
      <div className='product-bill'>
      <h2>₹ {data.price}</h2>
      <p>{data.desc}</p>
      </div>
      <Divider sx={{ width: { xs: 90 + "%", md: 100+ "%"}, m: "0 auto" }} />
      <ProductContact username={data.username} user_id={data.user_id}
       contact_details={data.contact_details} 
       />
      <Divider sx={{ width: { xs: 90 + "%", md: 100+ "%"}, m: "0 auto"}} />
      <ProductDetails brand={data.brand} created_at={data.created_at} city={data.contact_details.city}
      usage={data.usage}   />
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