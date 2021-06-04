import React from 'react'


const Header = () => {
    return (
        <div>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7">
                            <img src="./images/logo.png" width="16%" className="img-fluid p-3" />
                        </div>
                        <div className="col-lg-5">
                            <div className="container">
                                <div className="row pt-2">
                                    <div className="col-lg-4">
                                       <img src="./images/email.png" width="120%" className="img-fluid pt-4" /> 
                                    </div>
                                   
                                    <div className="col-lg-4">
                                        <img src="./images/call.png" width="70%" className="img-fluid pt-4 ml-5" /> 
                                    </div>
                                    <div className="col-lg-4">
                                        <img src="./images/timing.png" width="90%"  className="img-fluid pt-4" /> 
                                    </div>


                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Project</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Clients</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Careers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Contact</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
