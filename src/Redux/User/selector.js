import { createSelector } from "reselect";

const selectUser=state=>state.USER_REDUCER
// const selectCartHidden=state=>state.CART_REDUCER

export const selectCurrenUser=createSelector(
    [selectUser],
    (user)=>user.currentUser
)