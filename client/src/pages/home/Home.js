import { Box } from '@mui/material'
import React from 'react'
import Search from '../../common/Search'
import Banner from '../../components/banner/Banner'
import ItemList from '../../components/item-list/ItemList'
import "./style.css"

const Home = props => {
  return (
    <div className='home-page'>
        <Banner />
        <Box sx={{ display: { xs: "inline-block", md: "none" }, width: 100+"%" }}>
          <Search />
          {/* Todo: Categories */}
        </Box>
        <Box className="home-feed-section">
        <h4>Deals For You!</h4>
        <ItemList />
        </Box>
    </div>
  )
}

export default Home