import React, { useState } from 'react'


const Header = () => {
    const [navbar,fixeNavbar]=useState(false);

    const fixedNavbarTop =()=>{
        if(window.scrollY>210)
        {
            fixeNavbar(true);
        }
        else{
            fixeNavbar(false);
        }

    }
    window.addEventListener('scroll',fixedNavbarTop);

    return (
        <div>
            <section className="desktop-header">
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7">
                            <img src="./images/logo.png" width="20%" className="img-fluid p-3" />
                        </div>
                        <div className="col-lg-5">
                            <div className="container pt-4">
                                <div className="row pt-2">
                                    <div className="col-lg-6">
                                       <img src="./images/Email.png" width="12%" className="img-fluid" /><span className="font-weight-bold"> shrikant@prashantimep.com</span>
                                    </div>
                                   
                                    <div className="col-lg-6">
                                        <img src="./images/Call.png" width="8%" className="img-fluid" /> <span className="font-weight-bold">+91 98190 26352</span>
                                    </div>
                                    {/* <div className="col-lg-4">
                                        <img src="./images/clock.png" width="15%"  className="img-fluid ml-3" /> <span className="font-weight-bold">+91 98190 26352</span>
                                    </div>
 */}

                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </header>
            <nav className={navbar?'navbar navbar-expand-lg navbar-dark bg-dark fixed-top' : 'navbar navbar-expand-lg navbar-dark bg-dark'} >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-4" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light mr-4" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light mr-4" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light mr-4" href="#">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light mr-4" href="#">Project</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light mr-4" href="#">Clients</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light mr-4" href="#">Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light mr-4" href="#">Careers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light mr-4" href="#">Contact</a>
                    </li>
                    </ul>
                </div>
            </nav>
            </section>




            <section className="mobile-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <img className="navbar-brand" src="./images/logo.png" width="30%" />
                    {/* <a className="navbar-brand" href="#" width="20%"><img src="./images/logo.png" width="10%" /></a> */}
                    <button className="navbar-toggler mr-1" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Project</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Clients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>


        </div>
    )
}

export default Header
