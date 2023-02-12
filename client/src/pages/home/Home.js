import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Search from "../../common/Search";
import Banner from "../../components/banner/Banner";
import Filter from "../../components/filters/SelectCategory";
import ItemList from "../../components/item-list/ItemList";
import "./style.css";
import { useStateValue } from "../../context/StateProvider"

const Home = (props) => {
  const [{ search }, dispatch] = useStateValue();
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
  },[search, token]);

  return (
    <div className="home-page">
      <Banner />
      <Box
        sx={{ display: { xs: "inline-block", md: "none" }, width: 100 + "%" }}
      >
        <Search />
      </Box>
      <Box className="home-feed-section">
        <div className="home-deals">
          <div className="home-deals-text">
            <h4>{!search? 'Deals For You!' : `Search results for "${search}"`}</h4>
          </div>
          <div className="home-deals-filter">
            <Filter />
          </div>
        </div>
        <ItemList />
      </Box>
    </div>
  );
};

export default Home;
