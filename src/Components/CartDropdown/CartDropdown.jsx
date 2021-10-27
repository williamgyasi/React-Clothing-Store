import React from "react";
import { Button } from "../index";
import './cartdropdown.styles.scss'

const CartDropdown=()=>{
    return(
        <div className="cart-dropdown">
            <div className="cart-items" />
            <Button >Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown;