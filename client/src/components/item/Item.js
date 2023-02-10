import React from "react";
import "./style.css"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useStateValue } from "../../context/StateProvider";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const navigate = useNavigate();
  const [{ }, dispatch] = useStateValue();


  const d = new Date().toDateString()
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


  return (
    <Card onClick={handleClick}  className="item"  elevation={0} sx={{ textAlign: "right" }}>
    <IconButton sx={{ position: "absolute",ml: -5 }} color="primary" aria-label="add to shopping cart">
    <FavoriteBorderIcon sx={{ fontSize: 25, color: "black" }} />
</IconButton>
      <CardMedia className="item-img" component="img" alt="green iguana" sx={{ objectFit: "contain" }} image={props.img_url} />
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

