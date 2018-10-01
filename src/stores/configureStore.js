import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import asyncMiddleware from "../middlewares/async";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
const store = createStore(
    rootReducer, 
     composeWithDevTools(
    applyMiddleware(thunk)
));
export default store;
