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

export const REMOVE_FROM_CART=(item)=>{
    return{
        type:CART_TYPES.REMOVE_FROM_CART,
        payload:item
    }
}

export const DECREASE_ITEM_COUNT=(item)=>{
    return{
        type:CART_TYPES.DECREASE_ITEM_COUNT,
        payload:item
    }
}