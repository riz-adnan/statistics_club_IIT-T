import React from 'react'
import './procar.css'
import {Link} from 'react-router-dom'
const Blogcard = (props) => {
  const {blog}=props;
  const mystyle={
    "width":"24rem",
    "height":"20em"
  }
  
  return (
    <div>
       <div class="card" style={mystyle}>
       <h2 class="card-title">{blog.title}</h2>
  <div class="card-body">
    
    <p class="card-text">{blog.description}</p>
    <p class="card-text">{blog.tag}</p>
    

    <Link href="/" className="btn btn-primary">Read More</Link>
  </div>
</div>

    </div>
    
  )
}

export default Blogcard