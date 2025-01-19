
import React from 'react'

const BgVideio = () => {
  return (
    <div>
      {/* <source src='https://www.youtube.com/watch?v=0xTZWdO-Rcg' type='video/mp4'/> */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0xTZWdO-Rcg?si=hnxAoYRPkgm21XnF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default BgVideio;










































// const BackgroundVideo = ({ videoUrl }) => {
//   return (
//     <div className="background-video-container">
//       <video className="background-video" autoPlay loop muted>
//         <source src={videoUrl} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="content">
//         {/* Add your content here */}
//         <h1>Welcome to My Project</h1>
//       </div>
//     </div>
//   );
// };