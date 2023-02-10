import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MapIcon from '@mui/icons-material/Map';

const ProductDetails = props => {
  return (
    <div className="product-details">
    <table>
    <tbody>
    <tr>
    <td>
    <LocationCityIcon sx={{ pt: 1 }} /><strong>Brand</strong>
    </td>
    <td className='table-value'>
    {props.brand}
    </td>
    </tr>
    <tr>
    <td>
    <DataUsageIcon sx={{ pt: 1 }} /><strong>Usage</strong>
    </td>
    <td className='table-value'>
    {props.usage}
    </td>
    </tr>
    <tr>
    <td>
    <MapIcon sx={{ pt: 1 }} /><strong>Address</strong>
    </td>
    <td className='table-value'>
    {props.city}
    </td>
    </tr>
    <tr>
    <td>
    <CalendarMonthIcon sx={{ pt: 1 }} /><strong>Posting Date</strong>
    </td>
    <td className='table-value'>
    {props.created_at}
    </td>
    </tr>
    </tbody>    
    </table>
    </div>
  )
}

export default ProductDetails