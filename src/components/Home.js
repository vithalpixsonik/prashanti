import React from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Slider from './layout/Slider';

const Home = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <section className="about-us">
                <div class="header-text"><h2>&nbsp;&nbsp; About Us &nbsp;&nbsp;</h2></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="./images/logo.png" width="60%" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <h3>Prashant Mep Consultancy</h3>
                            <h6>
                            We're end to end solutions for Mechanical, Electrical, Plumbing, Fire Fighting, Fire Detection, IBMS, etc
                            </h6>
                        </div>
                    </div>
                </div>
                <center><button className="btn viewmore mt-3">View More</button></center>
            </section>

            <section className="service">
                <div class="header-text"><h2>&nbsp;&nbsp; Services &nbsp;&nbsp;</h2></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
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
                            <div className="col-lg-6">
                                <h3>Infrastructure Development MEP Services</h3>
                                <ul className="pt-2">
                                    <li>Master planning</li>
                                    <li>Infrastructure Planning</li>
                                    <li>Landscape designing</li>
                                    <li>Infrastructure expansion and modernisation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <center><button className="btn viewmore mt-3">View More</button></center>
            </section>

            <section className="workflow bg-light">
                <div class="header-text"><h2>&nbsp;&nbsp; Our Work Flow &nbsp;&nbsp;</h2></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 p-3">
                            <center>
                            <img src="./images/Workflow-1.png" width="30%" className="img-fluid" />
                            <h4 className="text-center pt-3">Preliminary Design <br/> Stage</h4>
                            </center>
                        </div>
                        <div className="col-lg-4 p-3">
                            <center>
                            <img src="./images/Workflow 2.png" width="30%" className="img-fluid" />
                            <h4 className="text-center pt-3">Design  <br/> Approach</h4>
                            </center>
                        </div>
                        <div className="col-lg-4 p-3">
                            <center>
                            <img src="./images/Workflow 3.png" width="30%" className="img-fluid" />
                            <h4 className="text-center pt-3">Design <br/> Stage</h4>
                            </center>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 p-3">
                            <center>
                            <img src="./images/Workflow 4.png" width="30%" className="img-fluid" />
                            <h4 className="text-center pt-3">Tender <br/> Stage</h4>
                            </center>
                        </div>
                        <div className="col-lg-4 p-3">
                            <center>
                            <img src="./images/Workflow 5.png" width="30%" className="img-fluid" />
                            <h4 className="text-center pt-3">Contract Award   <br/> Stage</h4>
                            </center>
                        </div>
                        <div className="col-lg-4 p-3">
                            <center>
                            <img src="./images/Workflow 6.png" width="30%" className="img-fluid" />
                            <h4 className="text-center pt-3">Construction <br/> Stage</h4>
                            </center>
                        </div>
                    </div>

                </div>
            </section>

            <section className="projects">
                <div class="header-text"><h2>&nbsp;&nbsp; Projects &nbsp;&nbsp;</h2></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="./images/Project photo 1.png" width="100%" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                        <h1 className="project-heading">HOTELS & RESORTS.</h1>
                            
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-6">
                        <h1 className="project-heading">RESIDENTIAL BUILDING <br/> WITH INFRA</h1>
                        </div>
                        <div className="col-lg-6">
                            <img src="./images/Projects photo 2.png" width="100%" className="img-fluid" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <img src="./images/Project photo 3.png" width="100%" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="project-heading">COMMERCIALS OFFICES ,<br/> RETAIL , MALL's</h1>
                        </div>
                    </div>

                </div>
                <center><button className="btn viewmore mt-3">View More</button></center>
            </section>


            <section className="gallery bg-light">
                <div class="header-text"><h2>&nbsp;&nbsp; Gallery &nbsp;&nbsp;</h2></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 p-3">
                            <img src="./images/Gallery photo 1.png" width="100%" className="img-fluid" />
                        </div>
                        <div className="col-lg-4 p-3">
                            <img src="./images/Gallery photo 2.png" width="100%" className="img-fluid" />
                        </div>
                        <div className="col-lg-4 p-3">
                            <img src="./images/Gallery photo 3.png" width="100%" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <center><button className="btn viewmore mt-3">View More</button></center>
                
            </section>


            <section className="gallery">
                <div class="header-text"><h2>&nbsp;&nbsp; Clients &nbsp;&nbsp;</h2></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 p-3">
                            <center><img src="./images/client 1.png" width="50%" className="img-fluid" /></center>
                        </div>
                        <div className="col-lg-3 p-3">
                            <center><img src="./images/client 2.png" width="50%" className="img-fluid" /></center>
                        </div>
                        <div className="col-lg-3 p-3">
                            <center><img src="./images/client 3.png" width="50%" className="img-fluid" /></center>
                        </div>
                        <div className="col-lg-3 p-3">
                            <center><img src="./images/client 4.png" width="50%" className="img-fluid" /></center>
                        </div>
                    </div>
                </div>
                <center><button className="btn viewmore mt-3">View More</button></center>
            </section>




            <section className="service">
                <div class="header-text"><h2>&nbsp;&nbsp; Testimonials &nbsp;&nbsp;</h2></div>
                    <div className="container">
                            <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img src="./images/Testimonial 1.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                    <img src="./images/Testimonial 2.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                    <img src="./images/Testimonial 3.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                        </div>
                    </div>
            </section>

        <Footer/>
        </div>
    )
}

export default Home
