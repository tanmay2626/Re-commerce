import React from 'react'
import { Divider } from "@mui/material";
import "./style.css"
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import data from "../../data/products.json"

const ListItem = (props) => {

    const products = data.products;
    const navigate = useNavigate();

    const [{ }, dispatch] = useStateValue();

    const handleListItem = () =>{
         const ans = products.find(e => props.product_id )
         dispatch({
            type: "CURRENT_ITEM",
            item: ans
          })
        navigate("/product")
    }

  return (
    <div onClick={handleListItem} >
    <div className='list-item'>
    <div className='list-item-img'>
    <img alt={props.product_id} src={props.img_url} />
    </div>
    <div className='list-item-name'>
    <span>{props.product_name}</span>
    </div>
    <div className='list-item-price'>
    <span>₹ {props.price}</span>
    </div>
    </div>
    <Divider />
    </div>
  )
}

export default ListItem