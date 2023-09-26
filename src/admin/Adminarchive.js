import React, { useContext, useEffect, useRef, useState } from 'react'
import blogcontext from "../context/blogcontext"
import { Link } from 'react-router-dom';
import Addarchive from './Addarchive';
import Archivecard from './Archivecard';
const Adminarchive = () => {
    
        const context = useContext(blogcontext);
        const { archive, getarchive } = context;
        useEffect(() => {
            getarchive()
            // eslint-disable-next-line
        }, [])
       
       
    
       
    
       
    
        
    
        return (
            <>
                <Addarchive />
                
            <div className="addnav">
            <Link to='/adminevent'  className="btn btn-outline-dark"  >Events</Link>
                                <Link to='/adminBlog' type="button" className="btn btn-outline-dark" >Blogs</Link>
            </div>
                <div className="row my-3">
                    <div className="container mx-2"> 
                    {archive.length===0 && 'No Products to display'}
                    <div class="container ">
                    <div class="row row-cols-md-3 row-cols-1">
                    {archive.map((p) => {
                        
                        return <Archivecard key={p._id} archive={p} />
                    })}
                    </div>
                    </div>
                    </div>
                </div>
            </>
  )
}

export default Adminarchive