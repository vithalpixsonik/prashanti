import React from 'react'

const Footer = () => {
    return (
        <div>
            <section className="footer bg-dark">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3">
                            <h4 className="text-light">Head Office</h4>
                            <p className="footer-para">Unit No. 303, Bussa Industrial Estate,
                                Shankar Rao Naram Path,
                                Near Peninsula Corporate Park,
                                Lower Parel (West) - 400 013
                                Mumbai, MH, India</p>
                        </div>

                        <div className="col-lg-3">
                            <h4 className="text-light">Branch Office</h4>
                            <p className="footer-para">5th Cross, Hanumanna Layout,
                            Near Lakeshore Garden,<br/> Vidhyaranyapura (P),<br/>
                            Bengaluru - 560097</p>
                        </div>

                        <div className="col-lg-3">
                            <h4 className="text-light">Contact Us</h4>
                            <img width="90%" className="mt-3" src="./images/CTA.png" />
                        </div>

                        <div className="col-lg-3">
                            <h4 className="text-light">Members</h4>
                            <img width="80%" className="mt-3" src="./images/MEMBERS.png" />
                        </div>

                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-12">
                        <center><p className="footer-credit text-center">Designed & Developed By <a href="https://pixsonik.com/" className="footer-credit" target="_new">Pixsonik</a></p></center>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Footer
