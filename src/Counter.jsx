import React from "react";
import { connect } from "react-redux";
import store from "./store/store";
function Counter(props){
    console.log(props)
    return(
        <div className="box">
            <h1>Counter:{props.c.Counter}</h1>
            <button onClick={()=>{props.dispatch({type:"inc"})}}>Inceriment</button>
            <button onClick={()=>{props.dispatch({type:"dec"})}}>Deceriment</button>
            <button onClick={()=>{props.dispatch({type:"reset"})}}>Reset</button>

        </div>
    )
}
export default connect(function(store){return store})(Counter)