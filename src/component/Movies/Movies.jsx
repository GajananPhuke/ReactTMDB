import axios from "axios";

import Spinner from "../common/Spinner/Spinner"
import { useEffect, useState } from "react";
import MovieCardComp from "../MovieCard/MovieCard";
import Pagination from "../Pagination/Pagination";


 

function Movies(props){
const[Movies,setMovies] = useState([]);
const[isLoading, SetIsLoading] = useState(true);
let[pageNumber, setPageNumber] = useState(1);
const{addToWatchList,removeFromWatchList,watchList} = props;

async function featchMovieData(){
  console.log("Featching data in Movies");
  const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e&page=${pageNumber}`);

  // const res1 = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e");
  // const responce = res1.json();
 
  let movies= res.data.results;
  setMovies(movies);
  SetIsLoading(false);
  console.log(movies);

}
// componentDidMount + ComponentDidUpdate
useEffect(()=>{
  featchMovieData();
},[pageNumber])// Add Dependancy whenever PagNumber change API will get call for new data 

function handleNextClickEvent(){
  console.log("Next Event Clicked :",pageNumber);
  pageNumber+=1;
  setPageNumber(pageNumber);
}
function handlePrevClickEvent(){
  console.log("Prev Event Clicked :",pageNumber);
  if(pageNumber>0){
  pageNumber-=1;
  setPageNumber(pageNumber); 
  }
}

if(isLoading){
  return<Spinner/>
}
  return<>
    <div className="text-2xl font-bold m-5 mt-3">
        <h1>Trending Movie</h1>
        <div className="flex flex-wrap gap-8 justify-evenly mt-5">
          {
            Movies.map((movieObj)=>{

              return<MovieCardComp key={watchList.id} watchList={watchList} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList}  movieObj={movieObj}/>
              
            })
            
          }
          <Pagination handleNextClickEvent={handleNextClickEvent} handlePrevClickEvent={handlePrevClickEvent}pageNumber={pageNumber}/>
        </div>
    </div>
  </>
}
export default Movies;