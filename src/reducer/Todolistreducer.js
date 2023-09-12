const intialState={
    todos:["vamsi","sai","ganesh"]
}
function Todosreducer(State=intialState,action){
    if(action.type==="addtodos"){
        return{...State,todos:[...State.todos,action.payload]}
    }
    if(action.type==="deletetodo"){
        var tem=[...State.todos];
        tem.splice(action.payload,1)
        return{...State.todos,todos:[...tem]}
    }
    return State
}
export default Todosreducer