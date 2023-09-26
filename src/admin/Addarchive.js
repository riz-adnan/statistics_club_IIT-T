import React, {useContext, useState} from 'react'
import blogcontext from '../context/blogcontext';

const Addarchive = () => {
    const context = useContext(blogcontext);
    const {addarchive} = context;

    const [archive, setarchive] = useState({title: "", tag: "",link:""})

    const handleClick = (e)=>{
        e.preventDefault();
        addarchive(archive.title, archive.tag,archive.link,);
        setarchive({title: "", tag:"", link:""})
    }

    const onChange = (e)=>{
        setarchive({...archive, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2>Add a Document</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={archive.title} onChange={onChange} mintag required /> 
                </div>
                
                
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={archive.tag} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="link" className="form-label">link</label>
                    <input type="text" className="form-control" id="link" name="link" value={archive.link} onChange={onChange} minLength={5} required />
                </div>
                
               
                <button  type="submit" className="btn btn-primary" onClick={handleClick}>Add Document</button>
            </form>
        </div>
    )
}

export default Addarchive