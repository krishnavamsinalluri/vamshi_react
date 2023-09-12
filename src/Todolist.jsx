import React from "react";
import {  connect } from "react-redux";
function Todolist(props){
     var [nt,setNt]=React.useState("")
    return(
        <div>

            <h1>Todolist</h1>
            <input type="text"  onChange={(e)=>{setNt(e.target.value)}}/>
            <button onClick={()=>{props.dispatch({type:"addtodo",playload:nt})}}>addtodo</button>
            {props.t.todos.map((a)=>{
                return <li>{a}</li>
            })}
        </div>
    )

}
export default connect(function(store){return store})(Todolist)
