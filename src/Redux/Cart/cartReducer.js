import {CART_TYPES} from './cartTypes'
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
                    cartItems:[...state.cartItems,action.payload]
                }
            }

        default: {
            return state
        }
    }
}


export default cartReducer;