import React, { useContext, useEffect, useRef, useState } from 'react';
import Blogcard from './Blogcard';
import blogcontext from '../context/blogcontext';
import Layout from './Layout';

const Home = () => {
    

        const context=useContext(blogcontext);
        const {blog,getBlog}=context;
    
        useEffect(()=>{
            getBlog()
        },[])
  return (
    <>
    <Layout>
    
    <div className="row my-3">
                <div className="container mx-2"> 
                {blog.length===0 && 'No Products to display'}
                <div class="container text-center">
                <div class="row row-cols-md-3 row-cols-1">
                {blog.map((p) => {
                    return <Blogcard key={blog._id}  blog={p} />
                })}
            </div>
            </div>
            </div>
            </div>
    </Layout>
    </>
  )
}

export default Home