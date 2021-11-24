import { createSelector } from "reselect";

// const COLLECTION_ID_MAP={
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// }

const selectShop=state=>state.SHOP_REDUCER;

export const selectShopData=createSelector(
    [selectShop],
    (shopData)=>shopData.collections
)

export const selectCollectionForPreview=createSelector(
    [selectShopData],
    collections=>collections ? Object.keys(collections).map(key=>collections[key]) :[]
)

export const selectCollection=collectionUrlParam=>
createSelector(
    [selectShopData],
    collections=>collections[collectionUrlParam]
)

export const isFetchingSelector=createSelector(
    [selectShop],
    (isFetching)=>isFetching.isFetching
)

export const selectIsCollectionLoaded=createSelector(
    [selectShop],
    shop=>!!shop.collections
)