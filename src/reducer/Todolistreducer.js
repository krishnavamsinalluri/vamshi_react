const intialState={
    todos:["vamsi","sai","ganesh"]
}
function Todosreducer(State=intialState,action){
    if(action.type==="addtodos"){
        return{...State,Todos:[...State.todos,action.playload]}
    }
    if(action.type==="deletetodo"){
        var tem=[...State.todos];
        tem.splice(action.playload,1)
        return{...State.todos,todos:[...tem]}
    }
    return State
}
export default Todosreducer