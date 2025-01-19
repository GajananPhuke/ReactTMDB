

import { useEffect, useState } from "react";
import  axios from "axios";

function Banner(){
  const [bannerImage, setBannerImage] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png");

  const[movieName, setMovieName] = useState("...");


  let featchMovieData = async ()=>{
      console.log("Featching data...");
      const res = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e");
      


     let randomNum = Math.floor(Math.random() * 20);
     
    
      let movie = res.data.results[randomNum];
      let moviePoster = movie.backdrop_path;
      let movieTitle = movie.title;

      setBannerImage(`https://image.tmdb.org/t/p/original/${moviePoster}`);
      setMovieName(movieTitle);

      // console.log(moviePoster);
      console.log(movieTitle);
  }

  useEffect(()=>{
    featchMovieData();
  },[])


  return<>
  <div className="h-[75vh] bg-cover bg-center flex justify-center items-end mt-5 rounded-xl" style={{backgroundImage:`url(${bannerImage})`}}>

    <div className="text-1xl w-[100vw]">
    <p class="text-white bg-gray-900 bg-opacity-60">{movieName}</p>
    </div>
  </div>
  </>
}

export default Banner;