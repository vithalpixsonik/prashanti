import React from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';

const About = () => {
    
    return (
        <div>
            <Header/>
                <section className="page-header">
                    <h1 className="text-white text-center">About Us</h1>
                </section>
                <section>
                    <div className="container mt-5">
                        <div className="row p-3">
                            <div className="col-lg-6">
                                <h4 className="aboutus-head text-uppercase">We're end to end solutions for Mechanical, Electrical, Plumbing,<br/> Fire Fighting, Fire Detection, IBMS, etc</h4>
                                <p className="text-grey aboutus-para">Prashanti MEP Consultant (PC) is one of the well known Engineering company. PC provides complete MEP Design Services for all type of Buildings,
                                     industry and infra projects. PC offers complete one roof solution of MEP services for your esteem projects across India.
                                     <br/> • PC caters to all types of industries including all types of building projects such as Commercial, Residential, Five star hotels,
                                     Hospitals and various Mega infrastructure projects such as Business parks, Townships, Warehousing etc.</p>
                            </div>
                            <div className="col-lg-6">
                               <center><img src="./images/logo.png" width="60%" className="img-fluid aboutus-logo pt-4 ml-5" /></center> 
                            </div>  
                        </div>
                    </div>
                </section>

                <section className="bg-light p-3">
                    <div className="container mt-5 ">
                        <div className="row p-3">

                            <div className="col-lg-6">
                                <img src="./images/chairman.png" width="80%" className="img-fluid ml-5" />
                                <h3 className="text-center mt-3">Mr Shrikant Devanpelli</h3>
                            </div>  
                            <div className="col-lg-6">
                                <div className="about-content">
                                <h1 className="aboutus-head">ABOUT CHAIRMAN & MANAGING DIRECTOR</h1>
                                <p className="text-grey aboutus-para">Mr Shrikant Devanpelli is The Founding Chairman and Managing Director of M/s. Prashanti MEP Consultant (PC), a Multi Disciplinary Turnkey Design and Management Consulting Firm Head Quartered in Mumbai, India. He has an extensive 15+ years of Utility Engineering Consulting Experience in various sectors such Five Star Hotels, Multi-speciality Hospitals, High Rise Buildings, IT parks & Data Centres, commercial, office buildings, Shopping Malls, Educational Institutes, Govt Buildings, industries, warehouse, large Infrastructure Master Plans, Townships, Places of worship etc., He his Mechanical Engineering From India’s One of the Most Prestigious VJTI College.
                                Mr. Shrikant Devanpelli Senior Associate Consultant and served for about 15 years over all. Later, He started “Prashanti MEP Consultant” in Mumbai with a broad vision to provide high quality consolidated Professional Engineering Consulting.</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </section>


                <section className="mission-desktop">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6">
                                <div className="card p-4 m-2 shadow"> <br/>
                                <div className="vision-text"><h2>&nbsp;&nbsp; Mision &nbsp;&nbsp;</h2></div>
                                <p className="text-center text-grey">
                                We strive to achieve par excellence in executing <br/> projects for all the customers may it be infrastructure,<br/> Industrial, residential or  commercial projects.<br/>
                                 Our goal is to achieve. To deliver excellence in <br/> service quality, reliability, safety and customer care.<br/> To win trust of
                                  all customers exceeding their <br/> expectations and achieve 
                                customer satisfaction. To consistently achieve high quality, integrity and productivity.
                                </p> <br/>
                                </div>  
                            </div>
                            <div className="col-lg-6">
                                <div className="card p-4 m-2 shadow">
                                    <br/>
                                <div className="vision-text"><h2>&nbsp;&nbsp; Vision &nbsp;&nbsp;</h2></div>
                                <p className="text-center text-grey">
                                To believe in creation of value to organisations and society for well being of public and staff. To strive towards customer 
                                satisfaction with best quality of service and time bound execution. To ensure that it will bring more repeat orders and enhance company’s growth.
                                 To create a combination of knowledge and expertise to provide best services. To select, train and 
                                create dedicated work force who can own the responsibility and create recognition for the company and customer.
                                </p> <br/>
                                </div>  
                            </div>
                           
                        </div>
                    </div>
                </section>

                <section className="mission-mobile">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6">
                                <div className="card p-4 m-2 shadow"> <br/>
                                <div className="vision-text"><h2>&nbsp;&nbsp; Mision &nbsp;&nbsp;</h2></div>
                                <p className="text-center text-grey">
                                We strive to achieve par excellence in executing  projects for all the customers may it be infrastructure, Industrial, residential or  commercial projects.
                                 Our goal is to achieve. To deliver excellence in  service quality, reliability, safety and customer care. To win trust of
                                  all customers exceeding their  expectations and achieve 
                                customer satisfaction. To consistently achieve high quality, integrity and productivity.
                                </p> <br/>
                                </div>  
                            </div>
                            <div className="col-lg-6">
                                <div className="card p-4 m-2 shadow">
                                    <br/>
                                <div className="vision-text"><h2>&nbsp;&nbsp; Vision &nbsp;&nbsp;</h2></div>
                                <p className="text-center text-grey">
                                To believe in creation of value to organisations and society for well being of public and staff. To strive towards customer 
                                satisfaction with best quality of service and time bound execution. To ensure that it will bring more repeat orders and enhance company’s growth.
                                 To create a combination of knowledge and expertise to provide best services. To select, train and 
                                create dedicated work force who can own the responsibility and create recognition for the company and customer.
                                </p> <br/>
                                </div>  
                            </div>
                           
                        </div>
                    </div>
                </section>

              
            <Footer/>
        </div>
    )
}

export default About
