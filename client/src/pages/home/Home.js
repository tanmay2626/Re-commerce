import { Box } from "@mui/material";
import React from "react";
import Search from "../../common/Search";
import Banner from "../../components/banner/Banner";
import Filter from "../../components/filters/SelectCategory";
import ItemList from "../../components/item-list/ItemList";
import "./style.css";

const Home = (props) => {
  return (
    <div className="home-page">
      <Banner />
      <Box
        sx={{ display: { xs: "inline-block", md: "none" }, width: 100 + "%" }}
      >
        <Search />
        {/* Todo: Categories */}
      </Box>
      <Box className="home-feed-section">
        <div className="home-deals">
          <div className="home-deals-text">
            <h4>Deals For You!</h4>
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
