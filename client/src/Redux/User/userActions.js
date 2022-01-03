import { USER_ACTION_TYPES } from "./userTypes"

export const SET_CURRENT_USER=user=>{
    
    return{
        type:USER_ACTION_TYPES.SET_CURRENT_USER,
        payload:user
    }
}