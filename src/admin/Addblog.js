import React, {useContext, useState} from 'react'
import blogcontext from '../context/blogcontext';

const AddBlog = () => {
    const context = useContext(blogcontext);
    const {addBlog} = context;

    const [blog, setBlog] = useState({title: "", description: "", price: "",urltoimage:"",tag:""})

    const handleClick = (e)=>{
        e.preventDefault();
        addBlog(blog.title, blog.description,blog.urltoimage,blog.tag);
        setBlog({title: "", description: "", urltoimage:"", tag:""})
    }

    const onChange = (e)=>{
        setBlog({...blog, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2>Add a Blog</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={blog.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={blog.description} onChange={onChange} minLength={5} required />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="urltoimage" className="form-label">urltoimage</label>
                    <input type="text" className="form-control" id="urltoimage" name="urltoimage" value={blog.urltoimage} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={blog.tag} onChange={onChange} minLength={5} required />
                </div>
               
                <button  type="submit" className="btn btn-primary" onClick={handleClick}>Add Blog</button>
            </form>
        </div>
    )
}

export default AddBlog