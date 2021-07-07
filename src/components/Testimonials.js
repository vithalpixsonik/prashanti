import React from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'
import { SRLWrapper } from "simple-react-lightbox";
const Testimonials = () => {
    return (
        <div>
            <Header/>
            <section className="page-header">
                <h1 className="text-white text-center">Testimonials</h1>
            </section>
            <section className="mt-5 mb-5">
            <SRLWrapper>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card m-3">
                                <a href="./images/testimonial/test1.jpg">
                                <img src="./images/testimonial/test1.jpg" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card m-3">
                                <a href="./images/testimonial/test2.jpg">
                                <img src="./images/testimonial/test2.jpg" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card m-3">
                                <a href="./images/testimonial/test3.jpg">
                                <img src="./images/testimonial/test3.jpg" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card m-3">
                                <a href="./images/testimonial/test4.jpg">
                                <img src="./images/testimonial/test4.jpg" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </SRLWrapper>

            </section>
            <Footer/>
        </div>
    )
}

export default Testimonials
