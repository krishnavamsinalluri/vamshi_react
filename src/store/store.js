import{combineReducers ,createStore}from "redux";
import CounterReducer from "../reducer/counterreducer";
const reducer= combineReducers({c:CounterReducer});
const store= new createStore(reducer);
export default store;
