import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const CartWidget = () => {
    return (
        <div style={{display:"flex", alignContent:"center", justifyItems: "center"}}>
            <p style={{color: "white"}}>0</p>
            <ShoppingBasketIcon sx={{color: "white"}} />
        </div>
      
    )
}

export default CartWidget