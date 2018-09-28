import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import asyncMiddleware from "../middlewares/async";

const store = createStore(rootReducer, applyMiddleware(asyncMiddleware));
export default store;
