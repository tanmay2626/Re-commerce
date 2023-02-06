import React from 'react'
import Item from '../item/Item,'
import "./style.css"

const ItemList = props => {
  return (
    <div className='item-list'> 
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    </div>
  )
}

export default ItemList