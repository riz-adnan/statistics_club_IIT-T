import React, { useContext, useEffect, useRef, useState } from 'react';
import Blogcard from './Blogcard';
import blogcontext from '../context/blogcontext';
import Layout from './Layout';
import { Link } from 'react-router-dom';
const Blog = () => {
    

        const context=useContext(blogcontext);
        const {blog,getBlog}=context;
    
        useEffect(()=>{
            getBlog()
        },[])
  return (
    <>
    <Layout>
    <h2 className="upc">Blogs</h2>
    <nav aria-label="breadcrumb" class="main-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item active" aria-current="page">Blogs</li>
        </ol>
      </nav>
    
                <div class="container ">
                <div class="row row-cols-md-1 row-cols-1 row-cols-lg-1">
                {blog.map((p) => {
                    return <Blogcard key={blog._id}  blog={p} />
                })}
            </div>
            </div>
            
    </Layout>
    </>
  )
}

export default Blog