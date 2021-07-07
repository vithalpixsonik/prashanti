import React from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'
import { SRLWrapper } from "simple-react-lightbox";
const Gallery = () => {
    return (
        <div>
            <Header/>
                <section className="page-header">
                    <h1 className="text-white text-center">Gallery</h1>
                </section>
                <section className="p-5">
                <SRLWrapper>

                    <div className="container">
                        
                        
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="m-2">
                                <a href="http://prashantimep.com/wp-content/uploads/2020/10/g7-1024x576.jpg">
                                    <div class="geeks">
                                    <img src="./images/gallery/CONVENTION CENTRE.png" alt="CONVENTION CENTRE"  />
                                    </div>
                                </a> 
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="m-2">
                                <a href="http://prashantimep.com/wp-content/uploads/2020/10/g9.png">
                                    <div class="geeks">
                                    <img src="./images/gallery/Govt. Building 2.png" alt="Govt. Building"  />
                                    </div>
                                </a>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="m-2">
                                <a href="http://prashantimep.com/wp-content/uploads/2020/10/g8.png">
                                    <div class="geeks">
                                    <img src="./images/gallery/Govt. Building.png" alt="Govt. Building"  />
                                    </div>
                                </a>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-4">
                                <div className="m-2">
                                <a href="http://prashantimep.com/wp-content/uploads/2020/10/Slider2-3-1024x516.jpg">
                                    <div class="geeks">
                                    <img src="./images/gallery/HERITAGE BUILDING.png" alt="HERITAGE BUILDING"  />
                                    </div>
                                </a>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="m-2">
                                <a href="http://prashantimep.com/wp-content/uploads/2020/10/g11-784x1024.jpg">
                                <div class="geeks">
                                    <img src="./images/gallery/HIGH RISE BUILDING.png" alt="HIGH RISE BUILDING"  />
                                    </div>
                                </a>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="m-2">
                                <a href="http://prashantimep.com/wp-content/uploads/2020/10/Slider4-1024x516.jpg">
                                <div class="geeks">
                                    <img src="./images/gallery/HOTEL.png" alt="HOTEL"  />
                                    </div>
                                </a>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-4">
                                <div className="m-2">
                                <a href="http://prashantimep.com/wp-content/uploads/2020/10/g4.png">
                                    <div class="geeks">
                                    <img src="./images/gallery/Lawn.png" alt="Lawn"  />
                                    </div>
                                </a>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="m-2">
                                <a href="http://prashantimep.com/wp-content/uploads/2020/10/g3-1024x481.png">
                                <div class="geeks">
                                    <img src="./images/gallery/Resort.png" alt="Resort"  />
                                    </div>
                                </a>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="m-2">
                                <a href="http://prashantimep.com/wp-content/uploads/2020/10/g1-300x300.png">
                                <div class="geeks">
                                    <img src="./images/gallery/Township 1.png" alt="Township"  />
                                    </div>
                                </a>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-4 m-auto">
                                <div className="m-2">
                                <a href="./images/gallery/tab/Township 2.png">
                                <div class="geeks">
                                    <img src="./images/gallery/TOWNSHIP 2.png" alt="TOWNSHIP"  />
                                    </div>
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

export default Gallery
