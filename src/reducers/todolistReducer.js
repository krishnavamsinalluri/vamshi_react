const initialState={
    todos:["to get car","to get iphone"]
}
function todoReducer(state=initialState,action){
    if(action.type==="addtodo"){
        return{...state,todos:[...state.todos,action.playload]}
    }
    if(action.type==="detletodo"){
        var tem=[...state.todos]
        tem.splice(action.playload,1)
        return{...state,todos:[...tem]}
    }
    return state
}
export default todoReducer
