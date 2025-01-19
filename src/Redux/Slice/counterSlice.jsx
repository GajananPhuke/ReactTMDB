

import {createSlice} from "@reduxjs/toolkit"


const counterSlice = createSlice({
   name:"counter",
   initialState:{
    value:0
   },
   reducers:{
    // user Reducer operation here ...
     increment : (state)=>{
        state.value+=1;
    },
     decrement : (state)=>{
        state.value-=1;
    }
   }
})
export const {increment,decrement} = counterSlice.actions;// tis will call to the increment & decrement function 
export default counterSlice.reducer;  // this are return Action-Creater & reducer

