import React from 'react'
import Layout from './Layout';
import './procar.css'
import { Link } from 'react-router-dom';
const ShowBlog = (props) => {
    const blogs=window.localStorage.getItem('currentblog');
    const blog=JSON.parse(blogs);
    
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
        <h6 className='blogdesc'>{blog.description.substr(0,400)}</h6>
        {(blog.urltoimage!=="...")?<>
        <img src={blog.urltoimage} alt="Loading" className="blogimage" />
        </>:<></>
        }
        <h6 className="blogdesc">{blog.description.substr(400)}</h6>
        </Layout>
        </div>
  )
}

export default ShowBlog