import React from 'react'
import './event.css'
import './even.js'




const Events = () => {
  return (
    <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha256-pTxD+DSzIwmwhOqTFN+DB+nHjO4iAsbgfyFq5K5bcE0=" crossorigin="anonymous"></script>
      
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha256-UhQQ4fxEeABh4JrcmAJ1+16id/1dnlOEVCFOxDef9Lw=" crossorigin="anonymous" />
<div class="container">
<div class="row">
    <div class="col-12">
        <div id="events" class="event-list owl-carousel owl-loaded owl-drag">
            <div class="owl-stage-outer">
                <div class="owl-stage">
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
                                <span class="event-day">12</span>
                                <div class="event-month-time">
                                    <span>nov</span>
                                    <span>13:00</span>
                                </div>
                            </div>
                            <h6  class="event-title">Session </h6>
                            <h6 class="event-content">Session on something random</h6>
                            
                        </div>
                    </div>
                    <div class="owl-item cloned" style={{width: "374.5px"}}>
                        <div class="event-item featured">
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
                                <span class="event-day">20</span>
                                <div class="event-month-time">
                                    <span>nov</span>
                                    <span>18:00</span>
                                </div>
                            </div>
                            <h6 href="#" class="event-title">Celebration</h6>
                            <p class="event-content">Celebrating National Statistics Day</p>
                            
                        </div>
                    </div>
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
                                <span class="event-day">30</span>
                                <div class="event-month-time">
                                    <span>dec</span>
                                    <span>22:00</span>
                                </div>
                            </div>
                            <h6 href="#" class="event-title">Event</h6>
                            <p class="event-content">Hackathon on data science</p>
                            
                        </div>
                    </div>
                    
    </div>
</div>
</div>
    </div>
    </div>
</div>
    </div>
  )
}

export default Events