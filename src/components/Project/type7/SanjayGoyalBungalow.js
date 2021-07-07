import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const SanjayGoyalBungalow = () => {
    return (
        <div>
            <Header/>
            <section className="page-header">
                    <h1 className="text-white text-center">Sanjay Goyal Bungalow</h1>
            </section>
            <div className="container mt-5 mb-5">
                <div className="m-4 p-3">
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <div className="shadow">
                        <img src="/images/Photos/placeholder.png" className="img-fluid p-4" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card shadow p-4">
                        <h3 className="pt-3">Sanjay Goyal Bungalow</h3><hr/>
                        <p className="pt-2"><b>Location :</b><br/> Raipur, India</p>
                        <p className="pt-2"><b>Type :</b><br/> 15,000 sq.ft with G+3</p>
                        <p className="pt-2"><b>Size :</b><br/> 15,000 sq.ft</p>
                        <p className="pt-2"><b>Architect :</b><br/> Praveen Awate Architects Pvt. Ltd,Mumbai</p>
                        <p className="pt-2"><b>Scope :</b><br/> MEPF</p>
                        </div>
                    </div>
                </div>
               
                </div>
            </div>    
            <Footer/>
        </div>
    )
}

export default SanjayGoyalBungalow
