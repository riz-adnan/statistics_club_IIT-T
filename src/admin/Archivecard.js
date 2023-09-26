import React,{useContext} from 'react'
import blogcontext from '../context/blogcontext';
    const Archivecard = (props) => {
        const context = useContext(blogcontext);
        const { deletearchive } = context;
        const { archive} = props;
        const mystyle={
            "width":"33%",
            "height":"25em"
          }
        return (
            
            <div className="col-md-3" style={mystyle}>
                <div className="card my-3" >
                    
                            <h5 className="card-title">{archive.title}</h5>
                            <br />
                        
                        
                        
                       
                        <p className="card-text">{archive.link.substr(0,20)}</p>
                        <br />
                        
                        <p className="card-text">{archive.tag}</p>
                        <br />
                        
                       
                        <div>
                        <button type="button" class="btn btn-outline-danger" onClick={()=>{deletearchive(archive._id)}}>Delete</button>
                            
                        </div>
                    </div>
                    </div>
                
        )
    }
    
    export default Archivecard