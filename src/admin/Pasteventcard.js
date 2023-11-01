import React,{useContext} from 'react'
import blogcontext from '../context/blogcontext';
    const Pasteventcard = (props) => {
        const context = useContext(blogcontext);
        const { deleteEvent } = context;
        const { event} = props;
        const mystyle={
            "width":"33%",
            
            "margin-top":"10em"
          }
        return (
            
            <div className="col-md-3" style={mystyle}>
                <div className="card my-3" >
                    
                            <h5 className="card-title">{event.title}</h5>
                            <br />
                        
                        <p className="card-text">{event.description.substr(0,30)}</p>
                        <br />
                        
                       
                        <p className="card-text">{event.posterlink.substr(0,20)}</p>
                        <br />
                        
                        <p className="card-text">{event.tag}</p>
                        <br />
                        
                        <p className="card-text">{event.day}</p>
                        <br />
                        
                        <p className="card-text">{event.month}</p>
                        <br />
                        
                        <p className="card-text">{event.eventtime}</p>
                        <br />
                        
                        <p className="card-text">{event.coordinator}</p>
                        
                        <div>
                        <button type="button" class="btn btn-outline-danger" onClick={()=>{deleteEvent(event._id)}}>Delete</button>
                            
                        </div>
                    </div>
                    </div>
                
        )
    }
    
    export default Pasteventcard