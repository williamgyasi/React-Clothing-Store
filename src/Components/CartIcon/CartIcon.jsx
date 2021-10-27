import React from "react";
import {ReactComponent as ShoppingIcon} from '../../Assets/bag-svgrepo-com.svg'
import './cart.styles.scss'

const CartIcon=()=>{
    return(
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon