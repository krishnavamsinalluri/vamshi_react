import React, { useState } from "react";
import {connect}from "react-redux"
function Todolist(props){
    var [nt,setNt]=useState('')
    return(
        <div className="box">
            <input type="text"  onChange={(e)=>{setNt(e.target.value)}}/> 
            <button onClick={()=>{props.dispatch({type:"addtodos",payload:nt})}}>addtodos</button>
            <h1>Todolist</h1>  
          {props.t.todos.map((a)=>{
          return <li>{a}</li>
    })}
    </div>
  
    )
}
export default connect(function(store){ return store})(Todolist)