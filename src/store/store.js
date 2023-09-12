import{combineReducers, createStore}from "redux"
import Countereducer from "../reducer/Counterreducer"
import Todosreducer from "../reducer/Todolistreducer"
const reducer=combineReducers({c:Countereducer,t:Todosreducer})
const store=new createStore(reducer)
export default store