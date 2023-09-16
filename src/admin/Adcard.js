import React,{useContext} from 'react'
import blogcontext from '../context/blogcontext';
    const Adcard = (props) => {
        const context = useContext(blogcontext);
        const { deleteBlog } = context;
        const { blogs, updateBlog } = props;
        const mystyle={
            "width":"33%",
            "height":"20em"
          }
        return (
            
            <div className="col-md-3" style={mystyle}>
                <div className="card my-3" >
                    
                            <h5 className="card-title">{blogs.title}</h5>
                            <br />
                        
                        <p className="card-text">{blogs.description.substr(0,30)}</p>
                        <br />
                        
                       
                        <p className="card-text">{blogs.urltoimage.substr(0,20)}</p>
                        <br />
                        
                        <p className="card-text">{blogs.tag}</p>
                        
                        <div>
                        <button type="button" class="btn btn-outline-danger" onClick={()=>{deleteBlog(blogs._id)}}>Delete</button>
                            <button type="button" class="btn btn-outline-success" onClick={()=>{updateBlog(blogs)}}>Update</button>
                        </div>
                    </div>
                    </div>
                
        )
    }
    
    export default Adcard
 