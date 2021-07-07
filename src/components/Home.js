import React from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Slider from './layout/Slider';
import { Link } from 'react-router-dom';
import { SRLWrapper } from "simple-react-lightbox";
const Home = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <section className="about-us bg-light">
                <div className="header-text"><h2>&nbsp;&nbsp; About Us &nbsp;&nbsp;</h2></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="./images/logo.png" width="60%" className="img-fluid about-logo" />
                        </div>
                        <div className="col-lg-6">
                            {/* <h3 className="about-heading">Prashant Mep Consultant</h3> */}
                            <h6 className="about-para pt-3">
                            We're end to end solutions for Mechanical, Electrical, Plumbing, Fire Fighting,<br/> Fire Detection, IBMS, etc
                            </h6>
                        </div>
                    </div>
                </div>
                <center><Link to="/about-us"><button className="btn viewmore mt-5">View More</button></Link></center>
            </section>

            <section className="service">
                <div className="header-text"><h2>&nbsp;&nbsp; Services &nbsp;&nbsp;</h2></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <h3>MEP & Building Services</h3>
                                <ul className="pt-2">
                                    <li>HVAC & Mechanical</li>
                                    <li>Electrical</li>
                                    <li>Plumbing</li>
                                    <li>Fire Detection System</li>
                                    <li>Fire Fighting</li>
                                    <li>Low Voltage System/Security System</li>
                                    <li>Integrated Building Management System (IBMS)</li>
                                    <li>BIM Modelling</li>
                                </ul>
                            </div>  
                            <div className="col-lg-6 col-12">
                                <h3>Infrastructure Development MEP Services</h3>
                                <ul className="pt-2">
                                    <li>Master Planning</li>
                                    <li>Infrastructure Planning</li>
                                    <li>Landscape Designing</li>
                                    <li>Infrastructure Expansion And Modernisation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <center><Link to="/services"><button className="btn viewmore mt-5">View More</button></Link></center>
            </section>

            <section className="workflow bg-light">
                <div className="header-text-workflow"><h2>&nbsp;&nbsp; Our Work Flow &nbsp;&nbsp;</h2></div>
                <div className="container">
                    <div className="row">
                        <img src="./images/workflow.jpg" className="img-fluid" />
                    </div>
                </div>
            </section>

            <section className="projects-desktop">
                <div className="header-text"><h2>&nbsp;&nbsp; Projects &nbsp;&nbsp;</h2></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div class="geeks">
                                <img src="./images/Project1.png" width="100%" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <h1 className="project-heading">HOTELS & RESORTS</h1>
                            
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-6">
                        <h1 className="project-heading">RESIDENTIAL BUILDING <br/> WITH INFRA</h1>
                        </div>
                        <div className="col-lg-6">
                            <div class="geeks">
                                <img src="./images/Project2.png" width="100%" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div class="geeks">
                                <img src="./images/Project3.png" width="100%" className="img-fluid"  />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="project-heading">COMMERCIALS OFFICES ,<br/> RETAILS , MALLS</h1>
                        </div>
                    </div>

                </div>
                <center><Link to="/projects"><button className="btn viewmore mt-5">View More</button></Link></center>
            </section>



            <section className="projects-mobile">
                <div className="header-text mt-5 mb-3"><h2>&nbsp;&nbsp; Projects &nbsp;&nbsp;</h2></div>
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-lg-12">
                            <div class="geeks">
                                <img src="./images/Project2.png" width="100%" className="img-fluid" />
                            </div>
                            <h6 className="project-heading text-center">RESIDENTIAL BUILDING <br/> WITH INFRA</h6>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <div class="geeks">
                                <img src="./images/Project3.png" width="100%" className="img-fluid" />
                            </div>
                            <h6 className="project-heading text-center">HOTELS & RESORTS</h6> 
                        </div>
                    </div>

                   

                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <div class="geeks">
                                <img src="./images/Project1.png" width="100%" className="img-fluid"  />
                            </div>
                            <h5 className="project-heading text-center">COMMERCIALS OFFICES ,<br/> RETAILS , MALLS</h5>
                        </div>
                    </div>

                </div>
                <center><Link to="/projects"><button className="btn viewmore mt-3 mb-5">View More</button></Link></center>
            </section>


            <section className="gallery bg-light">
                <div className="header-text-gallery"><h2>&nbsp;&nbsp; Gallery &nbsp;&nbsp;</h2></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 p-3">
                                <div class="geeks">
                                    <img src="./images/Gallery photo 1.png"  />
                                </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div class="geeks">
                                <img src="./images/Gallery photo 2.png"  />
                            </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div class="geeks">
                                <img src="./images/Gallery Photo 3.png"  />
                            </div>
                        </div>
                    </div>
                </div>
                <center><Link to="/gallery"><button className="btn viewmore mt-5">View More</button></Link></center>
                
            </section>


            <section className="gallery">
                <div className="header-text-clients"><h2>&nbsp;&nbsp; Clients &nbsp;&nbsp;</h2></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="shadow-sm p-4 mt-3">
                            <center><img src="./images/client 1.png" width="50%" className="img-fluid" /></center>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="shadow-sm p-4 mt-3">
                            <center><img src="./images/client 2.png" width="50%" className="img-fluid" /></center>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="shadow-sm p-4 mt-3">
                            <center><img src="./images/client 3.png" width="50%" className="img-fluid" /></center>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="shadow-sm p-4 mt-3">
                            <center><img src="./images/client 4.png" width="50%" className="img-fluid" /></center>
                            </div>
                        </div>
                    </div>
                </div>
                <center><Link to="/clients"><button className="btn viewmore mt-5">View More</button></Link></center>
            </section>




            <section className="service">
                <div className="header-text-testimonial"><h2>&nbsp;&nbsp; Testimonials &nbsp;&nbsp;</h2></div>
                    <div className="container">
                            <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                <SRLWrapper>
                                    <div className="carousel-item active">
                                        <center>
                                    <a href="./images/testimonial/test4.jpg">
                                        <img src="./images/T 1.2.png" className="img-fluid" alt="CONVENTION CENTRE" />
                                    </a></center>
                                    </div>
                                    
                                    <div className="carousel-item">
                                    <center>
                                    <a href="./images/testimonial/test1.jpg">
                                    <img src="./images/T 2.2.png" className="img-fluid" alt="CONVENTION CENTRE" />
                                    </a>                 
                                    </center>                   
                                    </div>
                                   

                                    <div className="carousel-item">
                                    <center>
                                    <a href="./images/testimonial/test3.jpg">
                                    <img src="./images/T 3.2.png" className="img-fluid" alt="CONVENTION CENTRE" />
                                    </a>
                                    </center>
                                    </div>
                                    </SRLWrapper>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                        </div>
                    </div>
                    <center><Link to="/testimonials"><button className="btn viewmore mt-5">View More</button></Link></center>
            </section>

        <Footer/>
        </div>
    )
}

export default Home
