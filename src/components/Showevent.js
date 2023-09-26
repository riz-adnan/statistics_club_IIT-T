import React from 'react'
import Layout from './Layout';
import './procar.css'
import { Link } from 'react-router-dom';
const Showevent = (props) => {
    const events=window.localStorage.getItem('currentevent');
    const event=JSON.parse(events)
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
        <h6 className="blogdesc">Event Coordinator: {event.coordinator}</h6>
        </Layout>
        </div>
  )
}

export default Showevent