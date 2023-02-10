import React from "react";
import "./style.css"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Item = ({ name, price, img, city, date}) => {

  const d = new Date().toDateString()
  const val = d.split(" ");

  return (
    <Card className="item"  elevation={0} sx={{ textAlign: "right" }}>
    <IconButton sx={{ position: "absolute",ml: -5 }} color="primary" aria-label="add to shopping cart">
    <FavoriteBorderIcon sx={{ fontSize: 25, color: "black" }} />
</IconButton>
      <CardMedia className="item-img" component="img" alt="green iguana" sx={{ objectFit: "contain" }} image={img} />
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
          ₹ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
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
          {name.slice(0, 20) + "..."}
        </Typography>
        <div className="item-desc">
          <div className="item-city">
          {city}
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
