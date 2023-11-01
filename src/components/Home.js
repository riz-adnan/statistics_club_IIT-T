import React, { useContext, useEffect, useRef, useState } from 'react';
import Blogcard from './Blogcard';
import blogcontext from '../context/blogcontext';
import Layout from './Layout';
import Events from './Events';
import './procar.css'
import Aboutus from './Aboutus';
import Bot from './Bot';
import Ourvision from './Ourvision';
import Pastevents from './Pastevent';
const Home = () => {
    

        const context=useContext(blogcontext);
        const {blog,getBlog}=context;
    
        useEffect(()=>{
            getBlog()
        },[])
  return (
    <>
    <Layout>
    
    <h2 className="upc">Introduction to Club</h2>
    <Aboutus/>
   
            <h2 className="upc">Our Upcoming Event</h2>
            <Events/>
            <h2 className="upc">Our Past Event</h2>
            <Pastevents/>
            <Bot/>
    </Layout>
    </>
  )
}

export default Home