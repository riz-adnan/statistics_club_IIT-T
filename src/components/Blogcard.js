import React from 'react'
import './procar.css'
import {Link} from 'react-router-dom'
const Blogcard = (props) => {
  const {blog}=props;
  const mystyle={
    "width":"100%",
    "height":"10em"
  }
  
  return (
    <div>
       <div class="card" style={mystyle}>
       <h5 class="card-title">{blog.title}</h5>
  <div class="card-body">
    
    <p class="card-text">{blog.description}</p>
    
    

    <Link href="/" className="btn btn-primary">Read More</Link>
  </div>
</div>

    </div>
    
  )
}

export default Blogcard