import React from "react";
import './checkout.styles.scss'
import { connect } from "react-redux";
import { ADD_TO_CART } from "../../Redux/Cart/cartActions";

const CheckoutItem=({item,increaseToCart})=>{
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={item.imageUrl} />
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity ">{item.quantity}</span>
            <span className="price">{item.price}</span>
            <span className="remove-button">&#10005;</span>
        </div>
    )
}

// const mapDispatchToProps=dispatch=>({
//     increaseToCart=(item)=>dispatch(ADD_TO_CART(item))
// })

export default  (CheckoutItem)