import React,{useState} from 'react'
import Layout from './Layout';
import './procar.css'
import { Link } from 'react-router-dom';
const ShowBlog = (props) => {
    const blogs=window.localStorage.getItem('currentblog');
    const blog=JSON.parse(blogs);
    const segments = blog.description.split(/(#h\{.*?\}|#i\{.*?\})/).map(segment => segment.trim());
  return (
    <div>
        <Layout>
        <nav aria-label="breadcrumb" class="main-breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
        <li class="breadcrumb-item"><Link to="/blogs">Blogs</Link></li>
          <li class="breadcrumb-item active" aria-current="page">{blog.title.substr(0,10)}...</li>
        </ol>
      </nav>
        <h2 className="blogtitle"> {blog.title} </h2>  
        <h6 className="blogtag">Category: {blog.tag}</h6>
        <div>
        {segments.map((segment, index) => {
        if (segment.startsWith('#h{')) {
          // Render subheading
          const subheading = segment.replace(/#h\{(.+?)\}/, '$1');
          return <h2 key={index}>{subheading}</h2>;
        } else if (segment.startsWith('#i{')) {
          // Render image
          const imageUrl = segment.replace(/\#i\{(.+?)\}/, '$1');
          return <img key={index} src={imageUrl} alt="Blog Image" />;
        } else {
          // Render regular text
          return <p key={index}>{segment}</p>;
        }
      })}
    </div>
        
        {(blog.urltoimage!=="...")?<>
        <img src={blog.urltoimage} alt="Loading" className="blogimage" />
        </>:<></>
        }
       
        </Layout>
        </div>
  )
}

export default ShowBlog