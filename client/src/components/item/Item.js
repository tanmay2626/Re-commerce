import React, { useState } from "react";
import "./style.css"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useStateValue } from "../../context/StateProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Item = (props) => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-empty-pattern
  const [{ }, dispatch] = useStateValue();
  const [flag,setFlag] = useState(false);

  const d = new Date().toDateString();
  const val = d.split(" ");

  const handleClick = () =>{
    dispatch({
      type: "CURRENT_ITEM",
      item: {
        product_name: props.product_name,
        price : props.price,
        img_url : props.img_url,
        contact_details : props.contact_details,
        created_at : props.created_at,
        product_id : props.product_id,
        user_id : props.user_id,
        username : props.username,
        usage : props.usage,
        category : props.category,
        desc : props.desc,
        brand : props.brand
      }
    })
    navigate("/product")
  }

  const handleFav = (e) =>{
    const product_id = props.product_id;

    // axios.post("http://localhost:8000/add_to_list",{ product_id }).then((res)=>{
    //   //console.log(res.data.message);
    // });
    
    if(!flag){
      setFlag(true);
      dispatch({
        type: "ADD_TO_WISHLIST",
        item: {
          product_id : props.product_id,
          product_name: props.product_name,
          price : props.price,
          img_url : props.img_url,
        } 
      });

    }else{
      setFlag(false);
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        product_id : props.product_id
      });

    }

  }  

  return (
    <Card  className="item"  elevation={0} sx={{ textAlign: "right" }}>
    <IconButton  onClick={handleFav} sx={{ position: "absolute",ml: -5, bgcolor: "black", opacity:0.6  }} color="primary">
    {
      !flag ? <FavoriteBorderIcon sx={{ fontSize: 25, color: "white" }} /> : <FavoriteIcon sx={{ fontSize: 25, color: "#8BF5FA" }} />
    }
</IconButton>
      <CardMedia onClick={handleClick}  className="item-img" component="img" alt="green iguana" sx={{ objectFit: "contain" }} image={`http://localhost:8000/public/images/${props.img_url}`} />
      <CardContent sx={{ p: 1, "&:last-child": { pb: 0 }, textAlign: "left" }}>
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: 0.9 + "rem",
            mb: 0.5
          }}
          variant="h5"
          component="div"
        >
          ₹ {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
        </Typography>
        <Typography
        className="item-name"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: 0.9 + "rem",
          }}
          variant="h1"
          component="div"
        >
          {props.product_name.slice(0, 20) + "..."}
        </Typography>
        <div className="item-desc">
          <div className="item-city">
          {props.contact_details.city}
          </div>
          <div className="item-date">
          {val[2]+" "+val[1]}
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default Item;

