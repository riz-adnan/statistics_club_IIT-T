import React from 'react';
import './Foot.css'
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <div className='foot'>
        
<div className="container my-5">
 
  <footer className="text-center text-lg-start text-white">
  
    <div className="container p-4 pb-0">
    
      <section className="">
       
        <div className="row">
         
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              The Statistics Club
            </h6>
            <p>
            The Statistics Club of IIT Tirupati opens the gateway to the world of data and statistics for the students from all disciplines. We as a community provide ample opportunity to  explore and learn everything about data, statistics and beyond through lectures, events, datathons, seminars and more.
            </p>
          </div>
         
          <hr className="w-100 clearfix d-md-none" />

        
         

          <hr className="w-100 clearfix d-md-none" />

      
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <Link to="/adminlogin" className="text-white">Admin</Link>
            </p>
            
            <p>
              <Link to="/team" className="text-white">About Us</Link>
            </p>
            
            <p>
              <Link to="https://www.iittp.ac.in/" className="text-white ">IIT-Tirupati</Link>
            </p>
            
          </div>

        
          <hr className="w-100 clearfix d-md-none" />

          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fa fa-home mr-3"></i> IIT-Tirupati, Tirupati</p>
            <p><i className="fas fa-envelope mr-3"></i> thestatistics@iittp.ac.in</p>
            <p> <Link to="https://www.instagram.com/thestatisticsclub_iittp/" 
               className="btn btn-outline-light "
               
               role="button"><i className="fab fa-instagram"></i></Link></p>
           
          </div>
         
        </div>
     
      </section>
    

      <hr className="my-3"/>

      
      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
        
          
         

        
          
          
        </div>
      </section>
     
    </div>
    
  </footer>
  
</div>

    </div>
  )
};

export default Footer;