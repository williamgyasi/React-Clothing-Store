import {CART_TYPES} from './cartTypes'
export const TOGGLE_DROPDOWN=()=>{
    return{
        type:CART_TYPES.TOGGLE_CART_HIDDEN,
    }
}

export const ADD_TO_CART=(item)=>{
    return{
        type:CART_TYPES.ADD_TO_CART,
        payload:item
    }
}