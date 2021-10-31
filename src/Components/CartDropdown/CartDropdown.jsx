import React from "react";
import { Button } from "../index";
import './cartdropdown.styles.scss'

import { CartItem } from "../index";

import { connect } from "react-redux";
import {selectCartItems} from '../../Redux/Cart/selector'
const CartDropdown=({cartArrayItems})=>{
    // console.log(cartArrayItems)
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartArrayItems.map((item)=>(
                    // <div>{item.name}</div>
                    <CartItem key={item.id} item={item} />
                ))
            }
            </div>
           
            <Button >Go To Checkout</Button>
        </div>
    )
}

const mapStateToProps=state=>({
    cartArrayItems:selectCartItems(state)
})

export default connect(mapStateToProps) (CartDropdown);