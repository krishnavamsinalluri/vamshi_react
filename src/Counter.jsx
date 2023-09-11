import React from "react";
import { Connect, connect } from "react-redux";
function Count(props){
    console.log(props)
    return(
        <div>  
            
            
      <h1> counter:{props.c.counter}</h1>
    <button onClick={()=>{props.dispatch({type:"INC"})}}>Incerment</button>
    <button onClick={()=>{props.dispatch({type:"DEC"})}}>Decrment</button>
    <button onClick={()=>{props.dispatch({type:"RESET"})}}>Reset</button>

    </div>

    )
}
export default connect(function(store){return store})(Count)