import React from 'react'
import Layout from './Layout';
import './procar.css'
const ShowBlog = (props) => {
    const{blog}=props;
    
  return (
    <div>
        <Layout>
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