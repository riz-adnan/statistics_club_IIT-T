import React, { useContext, useEffect, useRef, useState } from 'react'
import blogcontext from "../context/blogcontext"
import { Link } from 'react-router-dom';
import AddBlog from './Addblog';
import Adcard from './Adcard';
import './ad.css'
const AdminBlog = () => {
    const context = useContext(blogcontext);
    const { blog, getBlog, editBlog } = context;
    useEffect(() => {
        getBlog()
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [blogs, setBlog] = useState({id: "", etitle: "", edescription: "",eurltoimage:"",etag:""})

    const updateBlog = (currentBlog) => {
        ref.current.click();
        setBlog({id: currentBlog._id, etitle: currentBlog.title, edescription: currentBlog.description,eurltoimage:currentBlog.urltoimage,etag:currentBlog.tag})
    }

    const handleClick = (e)=>{ 
        editBlog(blogs.id, blogs.etitle, blogs.edescription, blogs.eurltoimage,blogs.etag)
        refClose.current.click();
    }

    const onChange = (e)=>{
        setBlog({...blogs, [e.target.name]: e.target.value})
    }

    return (
        <>
            <AddBlog />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Blog</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={blogs.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={blogs.edescription} onChange={onChange} minLength={5} required/>
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="urltoimage" className="form-label">urltoimage</label>
                                    <input type="text" className="form-control" id="eurltoimage" name="eurltoimage" value={blogs.eurltoimage} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={blogs.etag} onChange={onChange} />
                                </div>
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button  onClick={handleClick} type="button" className="btn btn-primary">Update Blog</button>
                        </div>
                    </div>
                </div>
            </div>
        <div className="addnav">
        <Link to='/adminevent'  className="btn btn-outline-dark"  >Events</Link>
                            <Link to='/adminarchive' type="button" className="btn btn-outline-dark" >Archive</Link>
        </div>
            <div className="row my-3">
                <div className="container mx-2"> 
                {blog.length===0 && 'No Products to display'}
                <div class="container ">
                <div class="row row-cols-md-3 row-cols-1">
                {blog.map((p) => {
                    
                    return <Adcard key={p._id} updateBlog={updateBlog} blogs={p} />
                })}
                </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default AdminBlog;