import React, { useContext, useEffect, useRef, useState } from 'react';
import Blogcard from './Blogcard';
import blogcontext from '../context/blogcontext';
import Layout from './Layout';
import Events from './Events';
import './procar.css'
import Aboutus from './Aboutus';
const Home = () => {
    

        const context=useContext(blogcontext);
        const {blog,getBlog}=context;
    
        useEffect(()=>{
            getBlog()
        },[])
  return (
    <>
    <Layout>
    
    <h2 className="upc">About Us</h2>
    <Aboutus/>
            <h2 className="upc">Our Upcoming Event</h2>
            <Events/>
    </Layout>
    </>
  )
}

export default Home