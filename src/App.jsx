import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./page/Home/Home"
import WatchList from './page/WatchList/WatchList'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavbarCom from "./component/Navbar/Navbar"
import CounterCom from './page/Counter/Counter'
import {store} from "./Redux/Store/Store"
import { Provider } from 'react-redux'
import React , {createContext,useContext} from 'react'
import BgVideio from './component/Bgvideo/BgVideio'

// Context Api for Avoiding props drilling 
const watchListContext = createContext();
// wrap all child component betn watchListContext
function App() {

  const [count, setCount] = useState(0);
  const[watchList,setWatchList] = useState(getWatchListFromLocalStorage());

  const addToWatchList = (movieObj)=>{
    // console.log("addToWatchList Function called ",movieObj);
    setWatchList([...watchList,movieObj]);
    console.log("adWatchList",watchList);

  }
  const removeFromWatchList = (movieObj)=>{
    console.log("removeFromWatchList Function called ",movieObj)
    let removeMovie = watchList.filter((watchlist)=>{
      return watchlist.id!==movieObj.id;
    })
    setWatchList(removeMovie);
    console.log("remove",watchList);
  }

  function getWatchListFromLocalStorage(){
      const watchListFromStorage = JSON.parse(localStorage.getItem("watchList"));
      if(watchListFromStorage===null){
        return [];
      }
      return watchListFromStorage;
  }

  useEffect(()=>{
      localStorage.setItem("watchList",JSON.stringify(watchList));
  },[watchList]);

  // const watchListContext = React.createContext();
  return (
    <>
      <div>

        {/* <source src='https://www.youtube.com/watch?v=0xTZWdO-Rcg' type='video/mp4'/> */}
      {/* <BgVideio/> */}
      <watchListContext.Provider value={{name:"gajanan"}}>
       <Provider store={store}>
       <BrowserRouter>
       <NavbarCom/>
       <Routes>
        <Route path='/'element={<Home key={watchList.id} watchList={watchList} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} />}></Route>
        <Route path='/watchList'element={<WatchList removeFromWatchList={removeFromWatchList} watchList={watchList}/>}></Route>
        <Route path='/counter'element={<CounterCom/>}></Route>
       </Routes>
       </BrowserRouter>
       </Provider>
       </watchListContext.Provider>
      </div>
    </>
  )
}

export default App
