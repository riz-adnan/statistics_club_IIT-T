import {React,useContext} from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >The Statistics Club</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        
        
        <li className="nav-item">
          <Link to="/blogs" className="nav-link" >Blogs</Link>
        </li>
        <li className="nav-item">
          <Link to="/events" className="nav-link" >Events</Link>
        </li>
        <li className="nav-item">
          <Link to="/team" className="nav-link" >Team</Link>
        </li>
        <li className="nav-item">
          <Link to="/quiz" className="nav-link" >Brain Teasers</Link>
        </li>

        </ul>
      
   
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar