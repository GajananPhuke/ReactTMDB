
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice/counterSlice"
// console.log(counterReducer);
export const store = configureStore({

  reducer:{
    count: counterReducer // this are state belong in store 
  }
})
