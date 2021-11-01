import React from "react";
import { Button } from "../index";
import './cartdropdown.styles.scss'
import { CartItem } from "../index";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {selectCartItems} from '../../Redux/Cart/selector'

const CartDropdown=({cartArrayItems,history})=>{
    // console.log(cartArrayItems)
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartArrayItems.length?
                cartArrayItems.map((item)=>(
                    // <div>{item.name}</div>
                    <CartItem key={item.id} item={item} />
                ))
                :
                <span className="empty-message">No Items </span>
            }
            </div>
           
            <Button onClick={()=>history.push("/checkout")} >Go To Checkout</Button>
        </div>
    )
}

const mapStateToProps=state=>({
    cartArrayItems:selectCartItems(state)
})

export default withRouter( connect(mapStateToProps) (CartDropdown));