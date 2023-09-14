import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,reset } from "./counterSlice";
function Counter(){
    var {Counter} =useSelector(
        (state)=>{ return state.c}
    )

    var dispatch=useDispatch()

    return(
        <div className="box">
            <h1>Counter:{Counter}</h1>
            <button onClick={ ()=>dispatch(increment())}>increment</button>
            <button onClick={ ()=>dispatch(decrement())}>decrement</button>
            <button onClick={ ()=>dispatch(reset())}>Reset</button>
        </div>
    )
}
export default Counter