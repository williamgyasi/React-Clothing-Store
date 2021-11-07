import { createSelector } from "reselect";

const selectShop=state=>state.SHOP_REDUCER;

export const selectShopData=createSelector(
    [selectShop],
    (shopData)=>shopData.shopData
)