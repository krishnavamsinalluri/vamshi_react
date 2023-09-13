import React from "react";
import { connect } from "react-redux";
import {incerimentCounter, ResetCounter, decrimentCounter } from "./store/actions";
function Counters(props){
    console.log(props)
    return(
        <div className="box">
            <h1>Counter:{props.Counter}</h1>
            <button onClick={()=>{props.incer()}}>Inceriment</button>
            <button onClick={()=>{props.decr()}}>Deceriment</button>
            <button onClick={()=>{props.rese()}}>Reset</button>
        </div>
    )
}
    function mapStateToProps(state){return  state.c}

    function mapDispatchToProps(dispatch)
    {return  {

        incer:()=>{dispatch(incerimentCounter())},
        decr:()=>{dispatch(decrimentCounter())},
        rese:()=>{dispatch(ResetCounter())}
    }
    }           
export default connect(
    mapStateToProps,
    mapDispatchToProps
)

(Counters)