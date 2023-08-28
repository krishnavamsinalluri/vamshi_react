import React from "react";

function Counter(props){
    var [coun,setCount]=React.useState(props.s)
    
    function inc(i){
        setCount(coun+props.i)
    }
      function dec(i){
        setCount(coun-props.i)
      }
    return(
        <div className="box">
            <h1 style={{color:"blue"}}>india</h1>
            <h1 style={{color:"green"}}>paskistan</h1>
            <h1>Counter:{coun}</h1>
            <button onClick={inc}>inceriment</button>
            <button onClick={dec}>decriment</button>

        </div>
    )
}
export default Counter;