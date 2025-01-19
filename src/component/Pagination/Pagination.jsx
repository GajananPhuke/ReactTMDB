



function Pagination(props){
  // Destructure
  const{pageNumber,handlePrevClickEvent,handleNextClickEvent} = props;
 
  
  return<>
    
    <div className=" w-[85vw] flex gap-5 justify-center text-xl bg-gray-400 ">
      <div onClick={handlePrevClickEvent} className="cursor-pointer">Prev</div>
      <div>{pageNumber}</div>
      <div onClick={handleNextClickEvent} className="cursor-pointer">Next</div>
    </div>
  </>
}
export default Pagination;