import {SHOP_TYPES} from './shopTypes'

export const UPDATE_COLLECTIONS=(collectionsMap)=>({
   
        type:SHOP_TYPES.UPDATE_COLLECTIONS,
        payload:collectionsMap
    
})