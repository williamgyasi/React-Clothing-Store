import {CART_TYPES} from './cartTypes'
const INITIAL_STATE={
    toggleValue:true
}


const cartReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CART_TYPES.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                toggleValue:!state.toggleValue,
            }

        default: {
            return state
        }
    }
}


export default cartReducer;