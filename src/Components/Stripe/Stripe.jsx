import React from "react";
import {Elements,useStripe,useElements,CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';



function Stripe({price}) {
    const stripe=useStripe()
    const stripePromise = loadStripe('pk_test_51HA00YJqgrv92NC6ELLXCvNZD0SKdIrGHgSfV9nIuPdkrWGHv7USybZJUr13FnEGjPx5Hkc7QGObImEGw0C3LwqX00BYYekTyF');
    const priceForStripe=price*100
    
  
    return (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe || !elements}>
            Pay
          </button>
        </form>
      );
  };



export default Stripe;