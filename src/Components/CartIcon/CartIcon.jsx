import React,{useState} from "react";
import {ReactComponent as ShoppingIcon} from '../../Assets/bag-svgrepo-com.svg'
import './cart.styles.scss'

import { connect } from "react-redux";
import { TOGGLE_DROPDOWN } from "../../Redux/Cart/cartActions";


const CartIcon=({TOGGLE_DROPDOWN,cartCount})=>{
    const [bride,setBride]=useState(true)
    // const bride = true;
    // const toggleBride=!bride
    return(
        <div className="cart-icon" onClick={TOGGLE_DROPDOWN}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    TOGGLE_DROPDOWN:()=>dispatch(TOGGLE_DROPDOWN())
})

const mapStateToProps=({CART_REDUCER:{cartItems}})=>({
    cartCount:cartItems.reduce((cummulative,cartItem)=>(cummulative+cartItem.quantity),0)
})

export default connect(mapStateToProps,mapDispatchToProps) (CartIcon)