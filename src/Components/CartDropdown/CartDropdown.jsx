import React from "react";
import { Button } from "../index";
import './cartdropdown.styles.scss'

import { connect } from "react-redux";

const CartDropdown=({cartArrayItems})=>{
    console.log(cartArrayItems)
    return(
        <div className="cart-dropdown">
            <div className="cart-items" />
            {
                cartArrayItems.map((item)=>(
                    <div key={item.id}>{item.name}</div>
                ))
            }
            <Button >Go To Checkout</Button>
        </div>
    )
}

const mapStateToProps=({CART_REDUCER:{cartItems}})=>({
    cartArrayItems:cartItems
})

export default connect(mapStateToProps) (CartDropdown);