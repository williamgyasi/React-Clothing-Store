import { combineReducers } from "redux";

import userReducer from "./User/userReducer";
import cartReducer from "./Cart/cartReducer";

export default combineReducers({
    USER_REDUCER:userReducer,
    CART_REDUCER:cartReducer
})