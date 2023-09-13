import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  todolist:["vamsi","sai"]
}

export const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addtodo:(state,action)=>{state.todolist.push(action.payload)},
    deletetodo:(state,action)=>{state.todolist.splice(action.payload,1)}
  }

})

export const { addtodo, deletetodo,  } = todolistSlice.actions

export default todolistSlice.reducer
