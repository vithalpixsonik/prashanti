import React from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'

const Services = () => {
    return (
        <div>
             <Header/>
                <section className="page-header">
                    <h1 className="text-white text-center">Servies</h1>
                </section>

                <section className="service">
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
                </section>

                <section className="workflow bg-light">
                <div className="header-text-workflow"><h2>&nbsp;&nbsp; Our Work Flow &nbsp;&nbsp;</h2></div>
                <div className="container">
                    <div className="row">
                        <img src="./images/workflow.jpg" className="img-fluid" />
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default Services
