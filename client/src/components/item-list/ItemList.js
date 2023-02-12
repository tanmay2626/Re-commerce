import React,{ useEffect } from 'react'
import Item from '../item/Item'
import "./style.css"
import data from "../../data/products.json"
import { useStateValue } from "../../context/StateProvider";

const ItemList = (props) => {

  const [{ city, category, search }] = useStateValue();
  let products = data.products;

  const Filter = () =>{
    if(category==='All'){
      products =  products.filter(e => e.contact_details.city===city);
    }else{
      products =  products.filter(e => e.contact_details.city===city && e.category===category);
    }
    if (search) {
      products  = products.filter((item) => {
        return item.product_name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return products
  }

  useEffect(()=>{
    Filter()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[city, category, search])

  const filterValue = Filter()


  return (
    <div className='item-list'> 
    {
      filterValue.length>0 ?
      filterValue.map((item, index)=>{
        return(
          <Item key={index} product_name={item.product_name} created_at={item.created_at}
           price={item.price} img_url={item.img_url} contact_details={item.contact_details}
           brand={item.brand} product_id={item.product_id} usage={item.usage} user_id={item.user_id}
            username={item.username} category={item.category} desc={item.description} 
            />
        )
      }) : <h2>Not Found</h2>
    }
    </div>
  )
}

export default ItemList