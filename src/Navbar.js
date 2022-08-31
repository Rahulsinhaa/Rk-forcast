import React from 'react';
import {WiUmbrella} from "react-icons/wi";


function Navbar() {
  return (
    <div>


<nav className="navbar navbar-light bg-dark ">
  <div className="container-fluid d-flex justify-content-center">
    <a className="navbar-brand text-warning" style={{fontSize:"50px"}} href="#">
      <WiUmbrella size='5rem' color='red'/>
        
            R-k Forcast
       
    </a>
  </div>
</nav>

    </div>
  )
}

export default Navbar