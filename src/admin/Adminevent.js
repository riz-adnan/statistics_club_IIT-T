import React, { useContext, useEffect, useRef, useState } from 'react'
import blogcontext from "../context/blogcontext"
import { Link } from 'react-router-dom';
import Addevent from './Addevent';
import Eventcard from './Eventcard';
const Adminevent = () => {
    
        const context = useContext(blogcontext);
        const { event, getevent } = context;
        useEffect(() => {
            getevent()
            // eslint-disable-next-line
        }, [])
       
       
    
       
    
       
    
        
    
        return (
            <>
                <Addevent />
                
            <div className="addnav">
            <Link to='/adminevent'  className="btn btn-outline-dark"  >Events</Link>
                                <Link to='/adminarchive' type="button" className="btn btn-outline-dark" >Archive</Link>
            </div>
                <div className="row my-3">
                    <div className="container mx-2"> 
                    {event.length===0 && 'No Products to display'}
                    <div class="container ">
                    <div class="row row-cols-md-3 row-cols-1">
                    {event.map((p) => {
                        
                        return <Eventcard key={p._id} event={p} />
                    })}
                    </div>
                    </div>
                    </div>
                </div>
            </>
  )
}

export default Adminevent