const initialState={
    counter:0
}
function counterReducer(state=initialState,action){
    if(action.type==="INC"){
        return{...state,count:state.counter+1}
    }
    if(action.type==="DEC"){
        return{...state,count:state.counter-1}
        
    }
    if(action.type==="RESET"){
        return{...state,count:initialState}
    }
    return state
}
export default counterReducer