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
          <Item key={index} product_name={item.product_name} created_at={item.created_at}
           price={item.price} img_url={item.img_url} contact_details={item.contact_details}
           brand={item.brand} product_id={item.product_id} usage={item.usage} user_id={item.user_id}
            username={item.username} category={item.category} desc={item.description} 
            />
        )
      })
    }
    </div>
  )
}

export default ItemList