import React from 'react'

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./images/Banner1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="./images/Banner2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="./images/Banner3.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="./images/Banner4.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
        </div>
    )
}

export default Slider
