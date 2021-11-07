import { createSelector } from "reselect";

const COLLECTION_ID_MAP={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}
const selectShop=state=>state.SHOP_REDUCER;

export const selectShopData=createSelector(
    [selectShop],
    (shopData)=>shopData.shopData
)
