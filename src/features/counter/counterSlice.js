import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  Counter: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment:(state)=>{state.Counter=state.Counter+1},
    decrement:(state)=>{state.Counter=state.Counter-1},
    reset:(state)=>{state.Counter=initialState.Counter}

  }

})

export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice.reducer
