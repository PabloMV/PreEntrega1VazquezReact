import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const CartWidget = () => {
    return (
        <div >
            <ShoppingBasketIcon sx={{color: "black"}} />
            <p style={{color: "black"}}>0</p>
        </div>
    )
}

export default CartWidget