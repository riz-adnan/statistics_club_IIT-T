import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import blogContext from '../context/blogcontext'
import { useNavigate } from 'react-router-dom'

    

const Archivecard = (props) => {
    const{archives}=props;
    
  const context=useContext(blogContext);
  const mystyle={
    "width":"100%",
    
  }
  
  return (
    <div>
       
          <div class="card" style={mystyle}>
            <div class="card-header border-bottom flex-column align-items-start p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers text-primary h3 stroke-width-1 mb-2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <h4 class="text-primary font-weight-light mb-2">Documents</h4>
              <p class="font-size-sm mb-0">Tag: {archives.tag} </p>
            </div>
            <div class="card-header border-bottom justify-content-center py-4">
              <h2 class="pricing-price">
                {archives.title}
              </h2>
            </div>
            
            <div class="card-footer justify-content-center p-3">
              <Link to={archives.link}><button class="btn btn-outline-primary">View Document</button></Link>
            </div>
          </div>
        </div>
   
  )
}

export default Archivecard