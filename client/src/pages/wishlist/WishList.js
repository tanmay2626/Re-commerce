import React, { useEffect } from "react";
import ListItem from "../../components/listeitem/ListItem";
import "./style.css";
import { useStateValue } from "../../context/StateProvider";

const WishList = (props) => {
  const [wishList] = useStateValue();
  const data = wishList.wishList

  // eslint-disable-next-line no-empty-pattern
  const [{ }, dispatch] = useStateValue();
  const token = localStorage.getItem('AUTH_TOKEN');


  const loadLocalStorage = () =>{
    dispatch({
      type: "SET_USER",
      item: JSON.parse(token),
    });
  }

  useEffect(()=>{
    token && loadLocalStorage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[token]);

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
