import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./RootReducer";

// export default createStore(RootReducer,logger)

const middlewares=[logger];

const store=createStore(RootReducer,applyMiddleware(...middlewares))

export default store;