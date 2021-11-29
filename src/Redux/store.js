import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";

// export default createStore(RootReducer,logger)


const middlewares=[thunk];

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}

const store=createStore(RootReducer,applyMiddleware(...middlewares))

export default store;

