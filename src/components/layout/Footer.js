import React from 'react'

const Footer = () => {
    return (
        <div>
            <section className="footer bg-dark">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 pb-2 ">
                            <div className="p-3 bggrey shadow">
                            <h5 className="text-light">Head Office</h5>
                            <p className="footer-para text-light">
                            01, Ground Floor, Bldg No. 01,
                            Gomata Nagar, Behind Raheja Atlantic
                            Tower, Near Shri Ram Mill,
                            Lower Parel (W), Mumbai – 400 013.           
                            </p>
                           
                            <p className="footer-para text-light"><b>Mon to fri :</b>- 10am to 6pm</p>
                            </div>   
                        </div>

                        <div className="col-lg-3 pb-2">
                            <div className="p-3">
                            <h5 className="text-light">Branch Office</h5>
                            <p className="footer-para">5th Cross, Hanumanna Layout,
                            Near Lakeshore Garden,<br/> Vidhyaranyapura (P),<br/>
                            Bengaluru - 560097</p>
                            <p className="footer-para"><b>Mon to fri :</b>- 10am to 6pm</p>
                            </div>
                        </div>

                        <div className="col-lg-3 pb-2">
                            <div className="p-2"> 
                            <h5 className="text-light">Contact Us</h5>
                            <table>
                                <tr>
                                    <td>
                                        <img src="/images/Email white.png" className="img-fluid email-footer" /><br/><br/>
                                    </td>
                                    <td>
                                    <span className="footer-para ml-1">info@prashantimep.com</span><br/>
                                    <span className="footer-para ml-1">shrikant@prashantimep.com</span><br/>
                                    {/* <span className="footer-para ml-1">shrikant_shree@rediffmail.com</span><br/> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="/images/Call white.png" width="80%" className="img-fluid email-footer mt-2" /><br/><br/>
                                    </td>
                                    <td>
                                    <p className="footer-para ml-1">(+91)9819026352</p>
                                    </td>
                                </tr>
                               

                            </table>
                            </div>
                        </div>

                        <div className="col-lg-3 pb-2">
                            <div className="p-3">
                            <h5 className="text-light">Members</h5>
                            <img width="80%" className="mt-3 footer-members" src="/images/MEMBERS.png" />
                            </div>
                        </div>

                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-12">
                        <center><p className="footer-credit text-center">© 2021 prashanti MEP consultant.  All rights reserved.</p></center>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Footer
