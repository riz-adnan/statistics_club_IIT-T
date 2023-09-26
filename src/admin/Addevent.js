import React, {useContext, useState} from 'react'
import blogcontext from '../context/blogcontext';

const Addevent = () => {
    const context = useContext(blogcontext);
    const {addEvent} = context;

    const [event, setEvent] = useState({title: "", description: "", tag: "",posterlink:"",day:"",month:"",eventtime:"",coordinator:""})

    const handleClick = (e)=>{
        e.preventDefault();
        addEvent(event.title, event.description,event.tag,event.posterlink,event.day,event.month,event.eventtime,event.coordinator);
        setEvent({title: "", description: "", tag:"", posterlink:"",day:"",month:"",eventtime:"",coordinator:""})
    }

    const onChange = (e)=>{
        setEvent({...event, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2>Add a Event</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={event.title} onChange={onChange} mintag required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={event.description} onChange={onChange} minLength={5} required />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={event.tag} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="posterlink" className="form-label">posterlink</label>
                    <input type="text" className="form-control" id="posterlink" name="posterlink" value={event.posterlink} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="day" className="form-label">day</label>
                    <input type="text" className="form-control" id="day" name="day" value={event.day} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="month" className="form-label">month</label>
                    <input type="text" className="form-control" id="month" name="month" value={event.month} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="eventtime" className="form-label">eventtime</label>
                    <input type="text" className="form-control" id="eventtime" name="eventtime" value={event.eventtime} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="coordinator" className="form-label">coordinator</label>
                    <input type="text" className="form-control" id="coordinator" name="coordinator" value={event.coordinator} onChange={onChange} minLength={5} required />
                </div>
               
                <button  type="submit" className="btn btn-primary" onClick={handleClick}>Add Event</button>
            </form>
        </div>
    )
}

export default Addevent