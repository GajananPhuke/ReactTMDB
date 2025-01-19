
// import {useSelector} from "react-redux"
import {useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../../Redux/Slice/counterSlice";

function CounterCom(){
  // const countValue = useSelector((state)=>state.count);// this function will read the store state
  const countValue = useSelector((state)=>state.count.value);
  const dispatch = useDispatch();// it will dispatch the trigger to reducer 

  const onIncrement = function(){
    console.log("onIncrement clecked : ",countValue);
    dispatch(increment());
  }
  const onDecrement = function(){
    console.log("onDecrement clecked : ",countValue);
    dispatch(decrement());
  }
  return <div className="font-bold text-3xl">
       <h1>Count : {countValue}</h1> 
       <button onClick={onIncrement} className="m-10">Increment</button>
       <button onClick={onDecrement}>Decrement</button>
  </div>
}
export default CounterCom;






