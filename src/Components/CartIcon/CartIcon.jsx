import React,{useState} from "react";
import {ReactComponent as ShoppingIcon} from '../../Assets/bag-svgrepo-com.svg'
import './cart.styles.scss'

import { connect } from "react-redux";
import { TOGGLE_DROPDOWN } from "../../Redux/Cart/cartActions";


const CartIcon=({TOGGLE_DROPDOWN})=>{
    const [bride,setBride]=useState(true)
    // const bride = true;
    // const toggleBride=!bride
    return(
        <div className="cart-icon" onClick={TOGGLE_DROPDOWN}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    TOGGLE_DROPDOWN:()=>dispatch(TOGGLE_DROPDOWN())
})


export default connect(null,mapDispatchToProps) (CartIcon)