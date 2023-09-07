import React from 'react'
import {Link, useLocation} from "react-router-dom";
import Layout from './Layout'
import './teams.css'
const Team = () => {
  return (
    <div>
        <Layout>
        <section class="team-section py-5">
    <div class="container">
	    <div class="row justify-content-center">
		    <div class="col-12 col-md-12">
			    <div class="card border-0 shadow-lg pt-5 my-5 position-relative">
				    <div class="card-body p-4">
					    <div class="member-profile position-absolute w-100 text-center">
					        <img class="rounded-circle mx-auto d-inline-block shadow-sm" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
				        </div>
					    <div class="card-text pt-1">
						    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">Shree Ganesh Sharma</h5>
						    <div class="mb-3 text-center">Co-ordinator</div>
						    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus eget eros vestibulum, accumsan ante viverra, condimentum tellus. Curabitur pellentesque convallis purus non ornare. Donec bibendum sed purus dignissim rutrum. Maecenas bibendum feugiat est, et venenatis nunc.</div>
					    </div>
				    </div>
				    <div class="card-footer theme-bg-primary border-0 text-center">
					    <ul class="social-list list-inline mb-0 mx-auto">
						    <li class="list-inline-item"><a class="text-dark" href="#"><i class="fab fa-linkedin-in fa-fw"></i> </a></li>
				            <li class="list-inline-item"><a class="text-dark" href="#"> <i class="fab fa-twitter fa-fw"></i> </a></li>
			                <li class="list-inline-item"><a class="text-dark" href="#"> <i class="fab fa-instagram fa-fw"></i> </a></li>
			                
			            </ul>
				    </div>
			    </div>
		    </div>
		    
		    <div class="col-12 col-md-6 col-lg-4">
			    <div class="card border-0 shadow-lg pt-5 my-5 position-relative">
				    <div class="card-body p-4">
					    <div class="member-profile position-absolute w-100 text-center">
					        <img class="rounded-circle mx-auto d-inline-block shadow-sm" src="https://i.imgur.com/eXVi2SY.jpg" alt=""/>
				        </div>
					    <div class="card-text pt-1">
						    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">Adnan Abbas Rizvi</h5>
						    <div class="mb-3 text-center">Web Developer</div>
						    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus eget eros vestibulum, accumsan ante viverra, condimentum tellus. Curc.</div>
					    </div>
				    </div>
				    <div class="card-footer theme-bg-primary border-0 text-center">
					    <ul class="social-list list-inline mb-0 mx-auto">
						    <li class="list-inline-item"><a class="text-dark" href="#"> <i class="fab fa-linkedin-in fa-fw"></i> </a></li>
				            <li class="list-inline-item"><a class="text-dark" href="#"><i class="fab fa-twitter fa-fw"></i> </a></li>
			                <li class="list-inline-item"><a class="text-dark" href="#"> <i class="fab fa-github fa-fw"></i> </a></li>
			                
			            </ul>
				    </div>
			    </div>
		    </div>
		    
		    <div class="col-12 col-md-6 col-lg-4">
			    <div class="card border-0 shadow-lg pt-5 my-5 position-relative">
				    <div class="card-body p-4">
					    <div class="member-profile position-absolute w-100 text-center">
					        <img class="rounded-circle mx-auto d-inline-block shadow-sm" src="https://i.imgur.com/7X72QxC.jpeg" alt=""/>
				        </div>
					    <div class="card-text pt-1">
						    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">Jonnalagadda Sai Charan</h5>
						    <div class="mb-3 text-center">Design Team Head</div>
						    <div>Passionate about design and adept at handling social media with finesse. A natural coordinator, skilled in collaborating with teams to achieve seamless results. My focus lies in blending creativity with effective communication.</div>
					    </div>
				    </div>
				    <div class="card-footer theme-bg-primary border-0 text-center">
					    <ul class="social-list list-inline mb-0 mx-auto">
				            <li class="list-inline-item"><Link to="https://www.linkedin.com/in/saicharan1367/" class="text-dark" > <i class="fab fa-linkedin fa-fw"></i> </Link></li>
			                
			            </ul>
				    </div>
			    </div>
		    </div>
		    <div class="col-12 col-md-6 col-lg-4">
			    <div class="card border-0 shadow-lg pt-5 my-5 position-relative">
				    <div class="card-body p-4">
					    <div class="member-profile position-absolute w-100 text-center">
					        <img class="rounded-circle mx-auto d-inline-block shadow-sm" src="https://drive.google.com/uc?export=view&id=1grYY0n6pEAhgqufLJhsr4H6d1_xKXAKE" alt=""/>
				        </div>
					    <div class="card-text pt-1">
						    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">Nandhvardhan Namboori</h5>
						    <div class="mb-3 text-center">Content Creator</div>
						    <div>I am a btech 3rd yr student intrested in learning new things ..</div>
					    </div>
				    </div>
				    <div class="card-footer theme-bg-primary border-0 text-center">
					    <ul class="social-list list-inline mb-0 mx-auto">
				            
			                
			                <li class="list-inline-item"><Link to="https://www.instagram.com/nandhavardhannamboori/" class="text-dark" > <i class="fab fa-instagram fa-fw"></i></Link></li>
			            </ul>
				    </div>
			    </div>
		    </div>
		    <div class="col-12 col-md-6 col-lg-4">
			    <div class="card border-0 shadow-lg pt-5 my-5 position-relative">
				    <div class="card-body p-4">
					    <div class="member-profile position-absolute w-100 text-center">
					        <img class="rounded-circle mx-auto d-inline-block shadow-sm" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
				        </div>
					    <div class="card-text pt-1">
						    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">XYZ</h5>
						    <div class="mb-3 text-center">Data Collector</div>
						    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus eget eros vestibulum, accumsan ante viverra, condimentum tellus.</div>
					    </div>
				    </div>
				    <div class="card-footer theme-bg-primary border-0 text-center">
					    <ul class="social-list list-inline mb-0 mx-auto">
				            <li class="list-inline-item"><a class="text-dark" href="#"> <i class="fab fa-twitter fa-fw"></i></a></li>
			                <li class="list-inline-item"><a class="text-dark" href="#"> <i class="fab fa-github fa-fw"></i> </a></li>
			                <li class="list-inline-item"><a class="text-dark" href="#"> <i class="fab fa-instagram fa-fw"></i></a></li>
			            </ul>
				    </div>
			    </div>
		    </div>
	    </div>
	    
    </div>
    
</section>


        </Layout>
    </div>
  )
}

export default Team