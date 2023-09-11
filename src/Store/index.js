import{combineReduers ,createStore}from "redux";
import todoReducer from "../reducers/todolistReducer";
import counterReducer from "../reducers/CounterReducer";
const reducer= combineReduers({c:counterReducer,t:todoReducer});
const store= new createStore(reducer);
export default store;