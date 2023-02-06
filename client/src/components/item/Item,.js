import React from "react";
import "./style.css"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip'; 
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Item = (props) => {

  const handleClick = () =>{
    console.log("lick");
  }

  return (
    <Card className="item" elevation={0} sx={{ textAlign: "right" }}>
    <IconButton sx={{ position: "absolute",ml: -5 }} color="primary" aria-label="add to shopping cart">
    <FavoriteBorderIcon sx={{ fontSize: 25, color: "black" }} />
</IconButton>
      <CardMedia className="item-img" component="img" alt="green iguana" sx={{ objectFit: "contain" }} image="https://apollo-singapore.akamaized.net/v1/files/r8i176uj2obj2-IN/image;s=300x600;q=60" />
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
          ₹ 39,000 
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
          Apple iPhone 11 Pro
        </Typography>
        <Typography
        className="item-description"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: 0.8+"rem"
          }}
          variant="body2"
          color="text.secondary"
        >
        Pune | Yesterday
        </Typography>
        <div className="item-add-to-cart">
        <Chip label="Add to Cart" variant="outlined" onClick={handleClick} sx={{ mt: 1 }} />
        </div>
      </CardContent>
    </Card>
  );
};

export default Item;
