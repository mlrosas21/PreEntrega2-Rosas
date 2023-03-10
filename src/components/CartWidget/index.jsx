import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge'; 

export const CartWidget = () => {
  return (
    <Badge badgeContent={2} color='secondary'>
        <ShoppingCartIcon style={{ color: '#fff' }} fontSize="medium"/>
    </Badge>
  )
}