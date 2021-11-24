import { SHOP_TYPES } from "./shopTypes";

const INITIAL_STATE = {
  collections:null,
  isFetching:false,
  errorMsg:undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case SHOP_TYPES.FETCH_COLLECTIONS_START:
      return{
        ...state,
        isFetching:true
      }

    case SHOP_TYPES.FETCH_COLLECTIONS_SUCCESS:
      return{
        ...state,
        isFetching:false,
        collections:action.payload
      }
    case SHOP_TYPES.FETCH_COLLECTIONS_FAILURE:
      return{
        ...state,
        isFetching:false,
        errorMsg:action.payload
      }
    case SHOP_TYPES.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
