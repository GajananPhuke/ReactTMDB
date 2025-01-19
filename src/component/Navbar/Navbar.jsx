

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import Logo from "./MovieLogo.png"
function NavbarCom() {
  return (
    <Container>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className='flex  gap-4'>
          <img className='w-10' src={Logo}/>
        <Link to="/"><div className='text-2xl font-bold text-blue-500'>Home</div></Link> 
        <Link to="/watchList"><div className='text-2xl font-bold text-blue-500'>WatchList</div></Link> 
        </div>
      </Container>
      
    </Navbar>
  </Container>
  );
}

export default NavbarCom;