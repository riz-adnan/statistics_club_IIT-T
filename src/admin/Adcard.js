import React,{useContext} from 'react'
import blogcontext from '../context/blogcontext';
    const Adcard = (props) => {
        const context = useContext(blogcontext);
        const { deleteBlog } = context;
        const { blogs, updateBlog } = props;
        console.log(blogs)
        return (
            
            <div className="col-md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <h5 className="card-title">{blogs.title}</h5>
                            
                        </div>
                        <p className="card-text">{blogs.description}</p>
                        
                        <p className="card-text">{blogs.urltoimage}</p>
                        <p className="card-text">{blogs.tag}</p>
                        <div>
                        <button type="button" class="btn btn-outline-danger" onClick={()=>{deleteBlog(blogs._id)}}>Delete</button>
                            <button type="button" class="btn btn-outline-success" onClick={()=>{updateBlog(blogs)}}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    export default Adcard
 