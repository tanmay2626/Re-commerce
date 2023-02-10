import React from 'react'
import Item from '../item/Item'
import "./style.css"
import data from "../../data/products.json"

const ItemList = props => {

  const products = data.products;

  return (
    <div className='item-list'> 
    {
      products.map((item, index)=>{
        return(
          <Item key={index} name={item.product_name} date={item.created_at}
           price={item.price} img={item.img_url} city={item.contact_details.city}  />
        )
      })
    }
    </div>
  )
}

export default ItemList