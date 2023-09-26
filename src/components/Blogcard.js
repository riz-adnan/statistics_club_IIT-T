import React, { useContext } from 'react'
import './procar.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import blogContext from '../context/blogcontext'
const Blogcard = (props) => {
 

  const {blog}=props;
  const navigate = useNavigate();
  const context=useContext(blogContext);
  const{current,displaycurrent}=context;
  const handleclick=()=>{
    displaycurrent(blog);
    localStorage.setItem('currentblog',JSON.stringify(blog));
    navigate('/showblog');
  }
  const mystyle={
    "width":"100%",
    "height":"12em"
  }
  
  return (
    <div>
       <div class="card" style={mystyle}>
       <h5 class="card-title">{blog.title}</h5>
  <div class="card-body">
    
    <p class="card-text">{blog.description.substr(0,110)}....</p>
    
    </div>

    <button onClick={handleclick} className="btn btn-outline-warning" id="readmore">Read More</button>
  
</div>

    </div>
    
  )
}

export default Blogcard