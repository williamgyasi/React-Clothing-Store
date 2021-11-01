import {CART_TYPES} from './cartTypes'
import { addItemsToCart,removeItemFromCart,decreaseItemCart } from './utils'


const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}


const cartReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CART_TYPES.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden,
            }

        case CART_TYPES.ADD_TO_CART:{
            return{
                    ...state,
                    cartItems:addItemsToCart(state.cartItems,action.payload)
                }
            }
        case CART_TYPES.REMOVE_FROM_CART:{
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }
        }

        case CART_TYPES.DECREASE_ITEM_COUNT:
            return{
                ...state,
                cartItems:decreaseItemCart(state.cartItems,action.payload)
            }

        default: {
            return state
        }
    }
}


export default cartReducer;