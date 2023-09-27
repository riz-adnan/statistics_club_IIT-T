import React, { useContext, useEffect, useRef, useState } from 'react';
import './event.css'

import blogcontext from '../context/blogcontext';
import Userevecard from './Userevecard';



const Events = () => {

    const context=useContext(blogcontext);
        const {event,getevent}=context;
    
        useEffect(()=>{
            getevent()
        },[])

  return (
    <div>
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha256-pTxD+DSzIwmwhOqTFN+DB+nHjO4iAsbgfyFq5K5bcE0=" crossorigin="anonymous"></script>
      
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha256-UhQQ4fxEeABh4JrcmAJ1+16id/1dnlOEVCFOxDef9Lw=" crossorigin="anonymous" />
<div class="container">
<div class="row row-cols-md-1 row-cols-1 row-cols-lg-3">
<div id="events" class="event-list owl-carousel owl-loaded owl-drag">
    <div class="owl-stage-outer">
    <div class="owl-stage">
                {event.map((p) => {
                    return <Userevecard key={event._id}  event={p} />
                })}

        
    </div>
    </div>
    </div>
</div>
</div>
</div>
    
  )
}

export default Events