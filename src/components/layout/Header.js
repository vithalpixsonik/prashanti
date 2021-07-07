import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [navbar,fixeNavbar]=useState(false);
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };
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
                        <Link to="/"><img src="/images/logo.png" width="20%" className="img-fluid p-3" /></Link>
                        </div>
                        <div className="col-lg-5">
                            <div className="container pt-4">
                                <div className="row pt-2">
                                    <div className="col-lg-7">
                                       <img src="/images/Email.png" width="9%" className="img-fluid" /><span className="font-weight-bold ml-1"> info@prashantimep.com </span>
                                    </div>
                                   
                                    <div className="col-lg-5">
                                        <img src="/images/Call.png" width="7%" className="img-fluid" /> <span className="font-weight-bold">+91 98190 26352</span>
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
                        <Link className="nav-link  text-light mr-4" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light mr-4" to="/about-us">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light mr-4" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light mr-4" to="/gallery">Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light mr-4" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light mr-4" to="/clients">Clients</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light mr-4" to="/testimonials">Testimonials</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light mr-4" to="/careers">Careers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light mr-4" to="/contact">Contact</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            </section>




            <section className="mobile-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <img className="navbar-brand" src="./images/logo.png" width="30%" />
                    {/* <Link className="navbar-brand" to="#" width="20%"><img src="./images/logo.png" width="10%" /></Link> */}
                    <button className="navbar-toggler mr-1" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i  className={isActive ? 'fa fa-times': 'fa fa-bars'} onClick={toggleClass} ></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link  pl-2" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark  pl-2" to="/about-us">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark  pl-2" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark  pl-2" to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark  pl-2" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark  pl-2" to="/clients">Clients</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark  pl-2" to="/testimonials">Testimonials</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark  pl-2" to="/careers">Careers</Link>
                            </li>
                            <li className="nav-item contact-btn">
                                <Link className="nav-link text-white pl-2" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>


        </div>
    )
}

export default Header
