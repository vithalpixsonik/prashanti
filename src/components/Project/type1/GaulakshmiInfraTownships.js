import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const GaulakshmiInfraTownships = () => {
    return (
        <div>
            <Header/>
            <section className="page-header">
                    <h1 className="text-white text-center">Gaulakshmi Infra Townships</h1>
            </section>
            <div className="container mt-5 mb-5">
                <div className="m-4 p-3">
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <div className="shadow">
                        <img src="/images/Photos/type1/1. Gaulakshmi Infra Township.jpg" width="100%" className="img-fluid p-4" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card shadow p-4">
                        <h3 className="pt-3">Gaulakshmi Infra Townships</h3><hr/>
                        <p className="pt-2"><b>Location :</b><br/> Boisar, Maharastra, India</p>
                        <p className="pt-2"><b>Type :</b><br/> 150 nos. Bungalows and Residential buildings</p>
                        <p className="pt-2"><b>Size :</b><br/> 17 Acres land with 9 lakhs sq.ft.</p>
                        <p className="pt-2"><b>Architect :</b><br/> M/s. Odyssey Architects and Associates (Phalghar / CBD Belapur)</p>
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

export default GaulakshmiInfraTownships
