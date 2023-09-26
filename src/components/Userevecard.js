import React, { useContext } from 'react'
import blogContext from '../context/blogcontext'
import { useNavigate } from 'react-router-dom'
const Userevecard = (props) => {
    const{event}=props;
    const navigate = useNavigate();
  const context=useContext(blogContext);
  const{currentevent,displaycurrenteve}=context;
  const handleclick=()=>{
    displaycurrenteve(event);
    localStorage.setItem('currentevent',JSON.stringify(event))
    navigate('/showevent');
  }
  return (
    
        
            <div class="owl-item cloned" style={{width: "374.5px"}}>
                <div class="event-item">
                    <div class="event-schedule">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-calendar event-icon">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span class="event-day">{event.day}</span>
                        <div class="event-month-time">
                            <span>{event.month.substr(0,3)}</span>
                            <span>{event.eventtime}</span>
                        </div>
                    </div>
                    <h6  class="event-title" onClick={handleclick}>{event.tag} </h6>
                    <h6 class="event-content">{event.title}</h6>
                    
                </div>
            </div>
           

  )
}

export default Userevecard