import { useEffect, useState } from "react";
import genreIdMappings from "../../configuration/generIdConfiguration";


function WatchList(props){
  const{watchList,removeFromWatchList}=props;
  const[movies,setMovie]=useState(watchList);
  const[searchValue,setSearchValue]= useState("");
  useEffect(()=>{
      setMovie(watchList);
  },[watchList])
  console.log("InWatchlist ",watchList);

  const genereSet = new Set(); // DS Set used to set unique value

  movies.map((movie)=>{
    const generId = movie.genre_ids;// it also array 
    generId.forEach((id)=>{
      genereSet.add(genreIdMappings[id]);
    })
  })
    const genersArr = Array.from(genereSet);// convert Set to Array
    genersArr.unshift("All Geners");
    console.log( genersArr);

  const onSearchInputeChange =(e)=>{
    let searchFiledValue = e.target.value;
      setSearchValue(searchFiledValue);

      const filteredMovie = watchList.filter((movie)=>{
        
        return movie.title.toLowerCase().startsWith(searchFiledValue.toLowerCase());
        
      })
      setMovie(filteredMovie);
  }


  const filterGenerFun = (generName)=>{
    console.log("FilterGener",generName);
    if(generName==="All Geners"){
      setMovie(watchList);
      
    }else{
      
        const filtereGenerdMovie = watchList.filter((movie)=>{
        console.log("Inside gener ",genreIdMappings[movie.genre_ids[0]]);
        return genreIdMappings[movie.genre_ids[0]].toLowerCase().startsWith(generName.toLowerCase());
      })
      setMovie(filtereGenerdMovie);
    }
          

         
         
  }


  return<>
   <div className="flex justify-center mt-5">

        {
            genersArr.map((gener)=>{
              return <button onClick={()=>filterGenerFun(gener)} className="mx-4 bg-blue-400 h-[2rem] w-[7rem] font-bold rounded-xl">{gener}</button>;
            })
        }

   </div>
    <div className="my-8">
        <input onChange={onSearchInputeChange} value={searchValue} className="h-[2rem] w-[20rem] border divide-gray-300" type="text" placeholder="Search Movie"/>
    </div>

    <div>

          <table className="w-full my-10">
            <thead>
                <tr>
                  <th></th><th>Name</th><th>Rating</th><th>Popularity</th><th>Gener</th>
                </tr>
            </thead>
            <tbody>
              {
                movies.map((movie)=>{
                    return <>
                      <tr>
                        <td >
                          <img className="h-[10] w-[8rem] object-fit" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
                        </td>
                        <td>
                          {movie.title}
                        </td>
                        <td>
                          {movie.vote_average}
                        </td>
                        <td>
                          {movie.popularity}
                        </td>
                        <td>
                          {genreIdMappings[movie.genre_ids[0]]}
                        </td>
                        <td onClick={()=>removeFromWatchList(movie)} className="text-red-500 cursor-pointer">Delete</td>
                      </tr>
                    </>
                })
              }
            </tbody>
          </table>

    </div>
  </>
}
export default WatchList;