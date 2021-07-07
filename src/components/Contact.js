import React from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'


const Contact = () => {
    return (
        <div>
            <Header/>
                <section className="page-header">
                    <h1 className="text-white text-center">Contact</h1>
                </section>
                <section className="mt-5 mb-5">
                    <div className="container">

                        {/* <div className="row">
                            <div className="col-lg-6">
                                <img src="./images/logo.png" width="80%" className="img-fluid contact-page-logo" /> 
                            </div>
                            <div className="col-lg-6">
                                <div className="card shadow p-4">
                                    <div className="contact-form-header mb-3">
                                        <h4 className="text-white text-center p-2">Let's Work Together</h4>
                                    </div>  
                                    <form>
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="name" /><br/>
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="email" /><br/>
                                    <label>Contact</label>
                                    <input type="tel" className="form-control" name="contact" /><br/>
                                    <label>Message</label>
                                    <textarea className="form-control" rows="3">    
                                    </textarea><br/>
                                    <input type="submit" className="btn contact-form-btn" value="Submit" />
                                </form>
                                </div>  
                            </div>
                        </div> */}
                        <section>
           
                            <form>
                               
                                    <h4 className="text-center p-2 pb-4">Let's Work Together</h4>
                                
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <input type="text" placeholder="Name" className="form-control" name="name" /><br/>
                                        </div>
                                        <div className="col-lg-12">
                                            <input type="email" placeholder="Email" className="form-control" name="email" /><br/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <textarea className="form-control" rows="3"  placeholder="Message"></textarea><br/>
                                        </div>
                                        <div className="col-lg-12">
                                            <center><input type="submit" className="btn contact-form-btn" value="Submit" /></center>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </section>
            <Footer/>
        </div>
    )
}

export default Contact
