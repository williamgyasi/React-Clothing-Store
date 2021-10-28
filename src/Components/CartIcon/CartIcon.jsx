import React from "react";
import {ReactComponent as ShoppingIcon} from '../../Assets/bag-svgrepo-com.svg'
import './cart.styles.scss'

import { connect } from "react-redux";
import { TOGGLE_DROPDOWN } from "../../Redux/Cart/cartActions";

const CartIcon=({TOGGLE_DROPDOWN})=>{
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

// const mapStateToProps=()=>{
//     toggleValue:state.CART_REDUCER.toggleValue
// }

export default connect(null,mapDispatchToProps) (CartIcon)