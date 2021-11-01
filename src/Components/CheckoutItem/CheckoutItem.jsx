import React from "react";
import './checkout.styles.scss'
import { connect } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART,DECREASE_ITEM_COUNT } from "../../Redux/Cart/cartActions";

const CheckoutItem=({item,removeFromCart,increaseItem,decreaseItem})=>{
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={item.imageUrl} />
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity ">
                <div 
                onClick={()=>decreaseItem(item)}
                className="arrow">&#10094;</div>
                <span className="value">{item.quantity}</span>
                <div 
                onClick={()=>increaseItem(item)}
                className="arrow">&#10095;</div>
            </span>
            <span className="price">{item.price}</span>
            <span
            onClick={()=>removeFromCart(item)}
            
            className="remove-button">&#10005;</span>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    removeFromCart:(item)=>dispatch(REMOVE_FROM_CART(item)),
    increaseItem:(item)=>dispatch(ADD_TO_CART(item)),
    decreaseItem:(item)=>dispatch(DECREASE_ITEM_COUNT(item))
})

export default connect(null,mapDispatchToProps) (CheckoutItem)