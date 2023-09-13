import { useSelector,useDispatch } from "react-redux";
import {useState} from "react"
import { addtodo,deletetodo } from "./todolistSlice";
function Todolist(){
    var [nt,setNt]=useState("")
    var {todolist}= useSelector((state)=>{ return state.t})
    var dispatch=useDispatch()
    
    return(
        <div>
            <h1>todolist</h1>
            <input type="text"  onChange={(e)=>{setNt(e.target.value)}}/>
            <button onClick={()=>{dispatch(addtodo(nt))}}>addtodo</button>
            {
                todolist.map((a,i)=>{
                     return <li>{a}
                     <button onClick={()=>{dispatch(deletetodo(i))}}>delete</button>
                     </li>
                    
                })
            }
        </div>
    )
}


export default Todolist