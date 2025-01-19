import React,{ useContext, useState } from "react";
import watchListContext from "../../App"

function MovieCardComp(props){
const {movieObj} = props;
const{addToWatchList,removeFromWatchList ,watchList} = props;

const watchListContextValue = useContext(watchListContext);
console.log("WatchListContext",watchListContextValue);

  const[Title1, setTitle]=useState("...");
  // const[isMovieINWatchList,setIsMovieINWatchList] = useState(false);

  let moviePoster = movieObj.backdrop_path;
  let movieTitle = movieObj.title;

  // let isMovieINWatchList = false;
  let isMovieINWatchList =watchList.find((watchListMovie)=>{
    return watchListMovie.id == movieObj.id;
  })

  let moviePosterURL = `URL(https://image.tmdb.org/t/p/original/${moviePoster})`

  // console.log("MovieCard",props.movieObj.title);
  return<div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl flex flex-col justify-between hover:scale-110 duration-300 hover:cursor-pointer " style={{backgroundImage:moviePosterURL}}>

      {
        (!isMovieINWatchList) ? <div onClick={()=>addToWatchList(movieObj)} className="flex justify-end mt-3">
            &#128512; {/* smily */}
          </div> 
          :
          <div onClick={()=>removeFromWatchList(movieObj)}>
          &#10060;{/* Cross */}
          </div>
      }

     <h1 className="text-white text-xl bg-gray-900 bg-opacity-60">{movieTitle}</h1>

  </div>
}
export default MovieCardComp;