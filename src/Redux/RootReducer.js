import { combineReducers } from "redux";

import userReducer from "./User/userReducer";
import cartReducer from "./Cart/cartReducer";
import directoryReducer from "./Directory/directoryReducer";
import shopReducer from "./Shop/shopReducer";

export default combineReducers({
    USER_REDUCER:userReducer,
    CART_REDUCER:cartReducer,
    DIRECTORY_REDUCER:directoryReducer,
    SHOP_REDUCER:shopReducer
})