import { useState } from "react";
import blogContext from "./blogcontext";


const BlogState = (props) => {
  const host = "http://localhost:5000"
  const blogInitial = []
  const [blog, setBlog] = useState(blogInitial)

  // Get all Notes
  const getBlog = async () => {
    // API Call 
    const response = await fetch(`${host}/api/blogs/fetchallblogs`, {
      method: 'GET',
      
      
    });
    const json = await response.json() 
    setBlog(json)
  }

  


   // Add a Note
   const addBlog = async (title, description, tag,urltoimage) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/blogs/addblog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": window.localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag,urltoimage})
    });

    const blogs = await response.json();
    setBlog(blog.concat(blogs))
  }

  // Delete a Note
  const deleteBlog = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/blogs/deleteblog/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": window.localStorage.getItem('token')
      }
    });
    const json = response.json(); 
    const newBlog = blog.filter((blog) => { return blog._id !== id })
    setBlog(newBlog)
  }

  // Edit a Note
  const editBlog = async (id, title, description, tag,urltoimage) => {
    // API Call 
    const response = await fetch(`${host}/api/blogs/updateblog/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": window.localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag,urltoimage})
    });
    const json = await response.json(); 

     let newBlog = JSON.parse(JSON.stringify(blog))
    // Logic to edit in client
    for (let index = 0; index < newBlog.length; index++) {
      const element = newBlog[index];
      if (element._id === id) {
        newBlog[index].title = title;
        newBlog[index].description = description;
        newBlog[index].tag = tag; 
        newBlog[index].urltoimage=urltoimage;
        
        break; 
      }
    }  
    setBlog(newBlog);
  }



  return (
    <blogContext.Provider value={{ blog, getBlog, deleteBlog,editBlog,addBlog}}>
      {props.children}
    </blogContext.Provider>
  )

}
export default BlogState;