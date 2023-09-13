import React, { useState } from "react";
import {connect}from "react-redux"
function Todolist(props){
    console.log(props)
    var [nt,setNt]=useState('')
    return(
        <div className="box">
            <input type="text"  onChange={(e)=>{setNt(e.target.value)}}/> 
            <button onClick={()=>{props.addtodoitems(nt)}}>addtodos</button>
            
          {props.todos.map((a,i)=>{
          return <li>{a} <button onClick={()=>{props.deletetodos(i)}}>delet</button></li>
    })}
    </div>
  
    )
}
    function mapStateToProps(state){
        return state.t
    }
    function mapDispatchToProps(dispatch){
        return{
            addtodoitems:(nt)=>{dispatch({type:"addtodos",payload:nt})},
            deletetodos:(i)=>{dispatch({type:"deletetodo",payload:i})}
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Todolist)