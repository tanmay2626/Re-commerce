import { Box } from '@mui/material'
import React from 'react'
import "./style.css"


const Banner = props => {
  return (
        <Box className='banner-box' sx={{ pt: 80+"px", pb: 10+"px" ,m: "0 auto" ,width: { xs: 100+"%" , md: 90+"%"}, height: { md: 350+"px" } }} >
        <img  alt='banner' src='https://mydukaan.io/blog/wp-content/uploads/Frame-1.png' /> 
        </Box>
  )
}

export default Banner