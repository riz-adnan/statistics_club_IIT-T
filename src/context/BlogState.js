import { useState } from "react";
import blogContext from "./blogcontext";


const BlogState = (props) => {
  const host = "http://localhost:5000"
  const blogInitial = []
  const eventInitial=[]
  const [blog, setBlog] = useState(blogInitial)
  const currentBlog={}
  const currenteve={};
  const [current,setcurrent]=useState(currentBlog)
  const [currentevent,setcevent]=useState(currenteve);
  const [event,setevent]=useState(eventInitial)
  // Get all Notes
  const getBlog = async () => {
    // API Call 
    const response = await fetch(`${host}/api/blogs/fetchallblogs`, {
      method: 'GET',
      
      
    });
    const json = await response.json() 
    setBlog(json)
  }
  const getevent= async()=>
  {
    const response=await fetch(`${host}/api/events/fetchallevents`,{
      method:'GET',
    });
    const json=await response.json();
    setevent(json);
  }


  


   // Add a Note
   const addBlog = async (title, description, urltoimage,tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/blogs/addblog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": window.localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, urltoimage,tag})
    });

    const blogs = await response.json();
    setBlog(blog.concat(blogs))
  }

  const addEvent = async (title, description,tag,posterlink,day,month,eventtime,coordinator) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/events/addevent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": window.localStorage.getItem('token')
      },
      body: JSON.stringify({title, description,tag,posterlink,day,month,eventtime,coordinator})
    });

    const events = await response.json();
    setevent(event.concat(events))
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
    setevent(newBlog)
  }

  const deleteEvent = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/events/deleteevent/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": window.localStorage.getItem('token')
      }
    });
    const json = response.json(); 
    const newEvent = event.filter((event) => { return event._id !== id })
    setevent(newEvent)
  }




  // Edit a Note
  const editBlog = async (id, title, description, urltoimage,tag) => {
    // API Call 
    const response = await fetch(`${host}/api/blogs/updateblog/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": window.localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, urltoimage,tag})
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

  const displaycurrent=async (currents) =>{
    setcurrent(currents);
  }
  const displaycurrenteve=async (currentseve)=>{
    setcevent(currentseve)
  }


  return (
    <blogContext.Provider value={{ blog,current,event,currentevent, getBlog, deleteBlog,editBlog,addBlog,displaycurrent, getevent, addEvent,deleteEvent,displaycurrenteve}}>
      {props.children}
    </blogContext.Provider>
  )

}
export default BlogState;