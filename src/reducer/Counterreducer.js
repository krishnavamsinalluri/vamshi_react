const intialState={
  Counter:0   //data
}
function Countereducer(State=intialState,action){
    if(action.type==="inc"){
        return{...State,Counter:State.Counter+1}
        
    }
    if(action.type==="dec"){
        return{...State,Counter:State.Counter-1}
    }
    if(action.type==="reset"){
        return{...State,Counter:intialState.Counter}
    }
    return State
}
export default Countereducer