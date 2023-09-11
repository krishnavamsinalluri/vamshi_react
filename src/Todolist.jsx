import React from "react";
import { Connect, connect } from "react-redux";
function Todolist(props){
    return(
        <div>
            <h1>Todolist:{props.t.todo.map((a)=>{
                return <li>{a}</li>
            })}</h1>
        </div>
    )

}
export default connect(function(store){return store})(Todolist)
