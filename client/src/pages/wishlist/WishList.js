import React from "react";
import ListItem from "../../components/listeitem/ListItem";
import "./style.css";
import { useStateValue } from "../../context/StateProvider";

const WishList = (props) => {
  const [wishList] = useStateValue();
  const data = wishList.wishList

  return (
    <div className="wishlist-page">
      <h2>WishList</h2>
      {data.map((item, index) => {
        return <ListItem key={index} product_id={item.product_id} product_name={item.product_name} 
        img_url={item.img_url}  price={item.price} />;
      })}
    </div>
  );
};

export default WishList;
