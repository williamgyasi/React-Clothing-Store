import { SHOP_TYPES } from "./shopTypes";
import { onSnapshot } from "@firebase/firestore";
import {
  collectionQueries,
  convertCollectionSnapshotMap,
} from "../../Firebase/firebase.utils";

export const FETCH_COLLECTIONS_START = () => ({
  type: SHOP_TYPES.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: SHOP_TYPES.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errormsg) => ({
  type: SHOP_TYPES.FETCH_COLLECTIONS_FAILURE,
  payload: errormsg,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    dispatch(FETCH_COLLECTIONS_START());
    const subscribe = onSnapshot(
      collectionQueries,
      async (querySnapshot) => {
        const collectionMap = convertCollectionSnapshotMap(querySnapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      },
      (error) => dispatch(fetchCollectionsFailure(error.message))
    );
  };
};
