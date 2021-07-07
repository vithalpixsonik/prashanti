import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const MhadaCovidHospital = () => {
    return (
        <div>
            <Header/>
            <section className="page-header">
                    <h1 className="text-white text-center">Mhada Covid Hospital</h1>
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
                        <h3 className="pt-3">Mhada Covid Hospital</h3><hr/>
                        <p className="pt-2"><b>Location :</b><br/> Sion, Mumbai, Maharastra, India</p>
                        <p className="pt-2"><b>Type :</b><br/> 1200 beds (1000 normal beds + 200 ICU)</p>
                        <p className="pt-2"><b>Size :</b><br/> - </p>
                        <p className="pt-2"><b>Architect :</b><br/> M/s. Architect Reza  Kabul, Mumbai</p>
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

export default MhadaCovidHospital
