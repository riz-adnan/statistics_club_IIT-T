import React from 'react'
import Layout from './Layout';
import './procar.css'
const Showevent = (props) => {
    const{event}=props;
    console.log(event);
  return (
    <div>
        <Layout>
        <h2 className="blogtitle"> {event.title} </h2>  
        <h6 className="blogtag"> {event.tag}</h6>
        <h6 className="blogtitle">Date: {event.day} {event.month}</h6>
        <h6 className="blogtitle">Time: {event.eventtime}</h6>
        {(event.posterlink!=="...")?<>
        <img src={event.posterlink} alt="Loading" className="blogimage" />
        </>:<></>
        }
        <h6 className='blogdesc'>{event.description}</h6>
        <h6 className="blogtitle">{event.coordinator}</h6>
        </Layout>
        </div>
  )
}

export default Showevent