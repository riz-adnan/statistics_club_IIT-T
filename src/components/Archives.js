import React, { useContext,useEffect } from 'react'
import Layout from './Layout'
import './procar.css'
import './Archives.css'
import blogContext from '../context/blogcontext'
import PDFViewer from './PDFViewer'
import Archivecard from './Archivecard'
import { Link } from 'react-router-dom'
const Archives = () => {
  const context=useContext(blogContext)
const {archive,getarchive}=context;
useEffect(()=>{
  getarchive()
},[])
  return (
    
        <Layout>
            {/* <PDFViewer></PDFViewer> */}
          <h2 className="upc">Archives/Documents</h2>
          
          <div class="main-body">
<div class="container">

      
      <nav aria-label="breadcrumb" class="main-breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item active" aria-current="page">Archives</li>
        </ol>
      </nav>
      
      <div class="container">
<div class="row row-cols-md-1 row-cols-1 row-cols-lg-3">
      {archive.map((p)=>{
        return <Archivecard  key={p.id} archives={p} />
      })}
      
        
        </div>
        </div>
       
    </div>
</div>
        </Layout>
  
  )
}

export default Archives