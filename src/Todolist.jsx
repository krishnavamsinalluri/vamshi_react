import React from "react";
function Todo(){
    var [todos,setTodos]=React.useState([])
    function abc(){
        var x=document.getElementById("dd").value
        setTodos([...todos,x])
    }
    function ab(i){
        var tem=todos
        tem.splice(i,1)
        setTodos([...todos])
    }

    return(
        <div>
            <input type="text" id="dd" />
            <button onClick={abc}>add</button>
            {
                todos.map((a,i)=>{
                    return <li>{a}
                    <button onClick={ab}>del</button></li>
                })
            }
        </div>
    )

}
 export default Todo