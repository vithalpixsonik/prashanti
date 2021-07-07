import React from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div>
             <Header/>
                <section className="page-header">
                    <h1 className="text-white text-center">Projects</h1>
                </section>

<div className="container mt-5 mb-5">
        
                <ul className="nav nav-tabs justify-content-center" role="tablist">
                    <li className="nav-item card m-1">
                    <a className="nav-link active pl-4 pr-4" data-toggle="tab" href="#home">Residential Building With Infra</a>
                    </li>
                    <li className="nav-item card m-1">
                    <a className="nav-link pl-4 pr-4" data-toggle="tab" href="#menu1">Residential Tall / High Rise Building</a>
                    </li>
                    <li className="nav-item card m-1">
                    <a className="nav-link pl-4 pr-4" data-toggle="tab" href="#menu2">RESIDENTIAL BUILDINGS / LOW RISE</a>
                    </li>
                    <li className="nav-item card m-1">
                    <a className="nav-link pl-4 pr-4" data-toggle="tab" href="#menu3">HOTELS & RESORTS</a>
                    </li>
                    <li className="nav-item card m-1">
                    <a className="nav-link pl-4 pr-4" data-toggle="tab" href="#menu4">HOSPITAL</a>
                    </li>
                    <li className="nav-item card m-1">
                    <a className="nav-link pl-4 pr-4" data-toggle="tab" href="#menu5">SCHOOL / COLLEGE / INSTITUTIONS</a>
                    </li>
                    <li className="nav-item card m-1">
                    <a className="nav-link pl-4 pr-4" data-toggle="tab" href="#menu6">BUNGALOW / PENT HOUSES PROJECTS</a>
                    </li>
                    <li className="nav-item card m-1">
                    <a className="nav-link pl-4 pr-4" data-toggle="tab" href="#menu7">INDUSTRIAL PROJECTS</a>
                    </li>
                    <li className="nav-item card m-1">
                    <a className="nav-link pl-4 pr-4" data-toggle="tab" href="#menu8">COMMERCIAL OFFICES / RETAIL / MALL</a>
                    </li>
                    <li className="nav-item card m-1">
                    <a className="nav-link pl-4 pr-4" data-toggle="tab" href="#menu9">MIXED OCCUPANCY PROJECTS & SPECIAL PROJECTS</a>
                    </li>
                </ul>



                <div className="tab-content">
                    <div id="home" className="container tab-pane active">
                    <h4 className="text-center pt-5">Residential Building With Infra</h4>
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/Gaulakshmi-Infra-Townships">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/type1/1. Gaulakshmi Infra Township.jpg" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Gaulakshmi Infra Township</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/Rainbow-County">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                </div>
                                <h5 className="text-center pt-2">Rainbow County</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/Mauli-Pride">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                </div>
                                <h5 className="text-center pt-2">Mauli Pride</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/S3EcoCity">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                </div>
                                <h5 className="text-center pt-2">S3 Eco City</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/BestOldColony">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                </div>
                                <h5 className="text-center pt-2">BEST old colony, Goregaon</h5>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>










                    <div id="menu1" className="container tab-pane fade">
                    <h4 className="text-center pt-5">Residential Tall / High Rise Building</h4>
                    <div className="container pb-5">
                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/VardhmanFlora">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Vardhman Flora</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/UrbanWaves">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                <img src="./images/Photos/type2/2. Urban Waves.jpg" className="img-fluid" />
                                </div>
                                <h5 className="text-center pt-2">Urban Waves</h5>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>






                    <div id="menu2" className="container tab-pane fade">
                    <h4 className="text-center pt-5">RESIDENTIAL BUILDINGS / LOW RISE</h4>
                    <div className="container">
                        
                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/EastInfinityResidential">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/type3/1. East Infinity Residential project..jpg" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">East Infinity Residential<br/>(Kukreja Infrastructures)</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/NenseyColony">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                <h5 className="text-center pt-2">Nensey Colony project <br/>(DGS Group)</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/Solaris1">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                <h5 className="text-center pt-2">Solaris 1, at Raheja district 1. <br/>Raheja Universal.</h5>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/KhandelwalResidential">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Khandelwal <br/> Residential.</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/MauliOmkar">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                <h5 className="text-center pt-2">Mauli Omkar.<br/>(Mauli Sai Developer)</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/DGSResidential">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/type3/6. DGS Residential.jpg" className="img-fluid" />
                                </div>
                                <h5 className="text-center pt-2">DGS Residential<br/> (DGS Group)</h5>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/TejKiran">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Tej Kiran <br/> Housing Society</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/SagarPark">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                <h5 className="text-center pt-2">Sagar Park, <br/>Residential Building.</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/Daffodil">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                <img src="./images/Photos/type3/9. Daffodil, Residential Building.jpg" className="img-fluid" />
                                    </div>
                                <h5 className="text-center pt-2">Daffodil, Residential Building <br/> (Shree Krishna Construction)</h5>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/TheHamletResidential">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">The Hamlet Residential project.<br/>(Ceear Realty)</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/TheBigTree">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                <h5 className="text-center pt-2">The Big Tree Residential <br/>(Ceear Realty)</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/SocietyResidential">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                <h5 className="text-center pt-2">Society Residential <br/> project.</h5>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/MalaCHS">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Mala CHS Residential <br/>(Verite Development)</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/MatruMandir">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                <h5 className="text-center pt-2">Matru Mandir Residential <br/>(Ratnaraj Group)</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/PrabhuDarshan">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                <h5 className="text-center pt-2">Prabhu Darshan Residential<br/>(The Vibrant Group)</h5>
                                </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                    </div>







                    <div id="menu3" className="container tab-pane fade">
                    <h4 className="text-center pt-5">HOTELS & RESORTS</h4>
                    <div className="container pb-5">
                        
                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/MotiwalaHotel">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/type4/1. Motiwala Hotel.jpg" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Motiwala Hotel </h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/SaiSakshiHotel">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                <h5 className="text-center pt-2">Sai Sakshi Hotel.</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/FernForestBathResort">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                <img src="./images/Photos/type4/3. Fern Forest Bath Resort, (phase 1+2).jpg" className="img-fluid" />
                                </div>
                                <h5 className="text-center pt-2">Fern Forest Bath Resort, (phase 1+2) </h5>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/HotelatReva">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/type4/4. Hotel at Reva..jpg" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Hotel at Reva <br/>(Udit Infra Pvt Ltd)</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/HotelExpressINN">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                <h5 className="text-center pt-2">Hotel Express INN <br/>Nashik.</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/ShreeShyaamHeritage">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                <h5 className="text-center pt-2">Shree Shyaam Heritage <br/> Resort</h5>
                                </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                    </div>







                    <div id="menu4" className="container tab-pane fade">
                    <h4 className="text-center pt-5">HOSPITAL</h4>
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/MhadaCovidHospital">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Mhada Covid Hospital</h5>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>






                    <div id="menu5" className="container tab-pane fade">
                   
                    <h4 className="text-center pt-5">SCHOOL / COLLEGE / INSTITUTIONS</h4>
                    <div className="container pb-5">
                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/VidyaVardhakSamatiSchool">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Vidya Vardhak Samati, School</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/ThakurCollege">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                <img src="./images/Photos/type6/2 Thakur College.jpg" className="img-fluid" />
                                    </div>
                                <h5 className="text-center pt-2">Thakur College</h5>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    </div>






                    <div id="menu6" className="container tab-pane fade">
                   
                    <h4 className="text-center pt-5">BUNGALOW / PENT HOUSES PROJECTS</h4>
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/KanhaLodge">
                                <div className="card m-3 p-3">
                                    
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Kanha Lodge <br/> (Thriving Hotels)</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/IORAResidence">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">IORA Residence, <br/> Sarji Apartment.</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/CloverWindermereVilla">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Clover Windermere <br/> Villa</h5>
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/SanjayGoyalBungalow">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Sanjay Goyal Bungalow</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/BhagwatiNiwas">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Bhagwati Niwas</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/ChetanTarwaniBungalow">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Chetan Tarwani Bungalow</h5>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    </div>






                    <div id="menu7" className="container tab-pane fade">
                    <h4 className="text-center pt-5">INDUSTRIAL PROJECTS</h4>
                    <div className="container pb-5">
                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/AmazonValshindWarehouse">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Amazon Valshind Warehouse.</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/DataCenter">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                </div>
                                <h5 className="text-center pt-2">Data Center,(ARSHIYA Ltd.)</h5>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>





                    <div id="menu8" className="container tab-pane fade">
                    <h4 className="text-center pt-5">COMMERCIAL OFFICES / RETAIL / MALL</h4>
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/NavMartMall">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Nav Mart Mall at Navy Nagar.</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/HSBCBank">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                <img src="/images/Photos/type9/2 HSBC Bank.jpg" className="img-fluid" />
                                </div>
                                    <h5 className="text-center pt-2">HSBC Bank (KCT Group)</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/OilIndiaLtd">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                </div>
                                    <h5 className="text-center pt-2">Lab + office (Oil India Ltd)</h5>
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/GuardiansOffice">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                </div>
                                    <h5 className="text-center pt-2">Guardians Office</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/NavMartHall">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                        <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Nav Mart Hall, Navy Nagar.</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/ChetanTarwaniOffice">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                        <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Chetan  Tarwani, Office</h5>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>






                    <div id="menu9" className="container tab-pane fade">
                    <h4 className="text-center pt-5">MIXED OCCUPANCY PROJECTS & SPECIAL PROJECTS</h4>
                    <div className="container pb-5">
                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/FacilityCenter">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="/images/Photos/type10/1. Facility Center,.jpg" className="img-fluid p-4" />
                                    </div>
                                    <h5 className="text-center pt-2">Facility Center</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/MCGMGymkhana">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                </div>
                                <h5 className="text-center pt-2">MCGM Gymkhana</h5>
                                </div>
                                </Link>
                            </div>
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/SBUTCluster">
                                <div className="card m-3 p-3">
                                <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                </div>
                                <h5 className="text-center pt-2">SBUT, Cluster 1A</h5>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <Link className="text-dark" to="/projects/BanquetHall">
                                <div className="card m-3 p-3">
                                    <div class="geeks">
                                    <img src="./images/Photos/placeholder.png" className="img-fluid" />
                                    </div>
                                    <h5 className="text-center pt-2">Banquet Hall + Apartment + warehouse</h5>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>


                </div>

  </div>


  
            <Footer/>
        </div>
    )
}

export default Projects
