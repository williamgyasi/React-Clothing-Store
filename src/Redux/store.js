import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'

// export default createStore(RootReducer,logger)

const sagaMiddleware=createSagaMiddleware();

const middlewares=[sagaMiddleware];

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}

const store=createStore(RootReducer,applyMiddleware(...middlewares))

// sagaMiddleware.run();

export default store;

