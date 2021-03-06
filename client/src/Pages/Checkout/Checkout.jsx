import React from "react";
import './checkout.stlyes.scss'

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems,selectCartTotal } from "../../Redux/Cart/selector";

import { CheckoutItem,StripeCheckout } from "../../Components";


const Checkout =({cartItems,cartTotal})=>{
    console.log(cartItems,"CHECKOUT PAGE")
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>
                        Product
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Description
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Quantity
                    </span>
                </div>
                <div className="header-block">
                    <span>
                        Remove
                    </span>
                </div>
            </div>
           {
               cartItems.map((item)=>(
                   <CheckoutItem key={item.id} item={item} />
               ))
           }

           <div className="total">
               <span>TOTAL:${cartTotal}</span>
           </div>

           <StripeCheckout price={cartTotal} />
        </div>
        
    )
}

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    cartTotal:selectCartTotal
})



export default connect(mapStateToProps) (Checkout)