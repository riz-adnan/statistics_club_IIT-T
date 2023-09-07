import {React,useContext} from 'react';
import {Link, useLocation} from "react-router-dom";

import './procar.css';

const Navbar = () => {
  let path=useLocation();
  return (
    <div className='navi' >
        <nav className="navbar navbar-expand-lg navbar ">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className={`nav-link ${(path.pathname==='/')?'active':'' }`} aria-current="page" ><h6>Home</h6></Link>
        </li>
        
        
        <li className="nav-item">
          <Link to="/blogs" className={`nav-link ${(path.pathname==='/blogs')?'active':'' }`} ><h6>Blogs</h6></Link>
        </li>
        <li className="nav-item">
          <Link to="/events" className={`nav-link ${(path.pathname==='/events')?'active':''}`} ><h6>Events</h6></Link>
        </li>
        <li className="nav-item">
          <Link to="/team" className={`nav-link ${(path.pathname==='/team')?'active': ''}`} ><h6>Team</h6></Link>
        </li>
        <li className="nav-item">
          <Link to="/quiz" className={`nav-link ${(path.pathname==='/quiz')?'active': ''}`} ><h6>Brain Teasers</h6></Link>
        </li>

        </ul>
      
   
      
    </div>
  
</nav>
    </div>
  )
}

export default Navbar