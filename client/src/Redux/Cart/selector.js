import {createSelector} from 'reselect'

const selectCart=state=>state.CART_REDUCER

export const selectCartItems=createSelector(
    [selectCart],
    (cart)=>cart.cartItems
);

export const selectHiddenState=createSelector(
    [selectCart],
    (cart)=>cart.hidden
)

export const selectCartItemCount =createSelector(
    [selectCartItems],
    cartItems=>
        cartItems.reduce(
            (cummulative,cartItem)=>(cummulative+cartItem.quantity),0)
)

export const selectCartTotal=createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((cumm,cartItem)=>cumm+(cartItem.price * cartItem.quantity),0)
)