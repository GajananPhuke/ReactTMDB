
import Banner from "../../component/Banner/Banner";
import Movies from "../../component/Movies/Movies"


function Home(props){
  const{addToWatchList,removeFromWatchList,watchList} = props;
  return<>
  
   <div className="text-3xl font-bold ">
    <Banner/>
    <Movies key={watchList.id} watchList={watchList} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} />
    </div>

  </> 
}
export default Home;