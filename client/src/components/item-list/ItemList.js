import React,{ useEffect, useState } from 'react'
import Item from '../item/Item'
import "./style.css"
import { useStateValue } from "../../context/StateProvider";
import axios from 'axios';

const ItemList = (props) => {


  const [{ city, category, search }] = useStateValue();
  const [data,setData] = useState([])

  const fetchData = () =>{
    axios.get("http://localhost:8000/get_products").then((res)=>{
      setData(res.data);
    });
  };

  //
  let products = data;
  const Filter = () =>{
    if(category==='All'){
      products =  products?.filter(e => e.seller_details.city===city);
    }else{
      products =  products?.filter(e => e.seller_details.city===city && e.category===category);
    }
    if (search) {
      products  = products.filter((item) => {
        return item.product_name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return products;
  }

  const filterValue = Filter();  

  useEffect(()=>{
    fetchData();
  //Filter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[city, category, search])

  return (
    <div className='item-list'> 
    {
      filterValue.length>0 ?
      filterValue.map((item, index)=>{
        return(
          <Item key={index} product_name={item.product_name} created_at={item.created_at}
           price={item.price} img_url={item.img} contact_details={item.seller_details}
           brand={item.brand} product_id={item.product_id} usage={item.usage} user_id={item.seller_details.token}
            username={item.seller_details.name} category={item.category} desc={item.description} 
            />
        )
      }) : <h2>Not Found</h2>
    }
    </div>
  )
}

export default ItemList