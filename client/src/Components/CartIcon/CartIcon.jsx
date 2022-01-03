import React,{useState} from "react";
import {ReactComponent as ShoppingIcon} from '../../Assets/bag-svgrepo-com.svg'
import './cart.styles.scss'

import { connect } from "react-redux";
import { TOGGLE_DROPDOWN } from "../../Redux/Cart/cartActions";
import {selectCartItemCount} from '../../Redux/Cart/selector'


const CartIcon=({TOGGLE_DROPDOWN,cartCount})=>{

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

const mapStateToProps=(state)=>({
    cartCount:selectCartItemCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps) (CartIcon)