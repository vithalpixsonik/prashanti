import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const SocietyResidential = () => {
    return (
        <div>
            <Header/>
                <section className="page-header">
                        <h1 className="text-white text-center">Society Residential project</h1>
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
                            <h3 className="pt-3">Society Residential project</h3><hr/>
                            <p className="pt-2"><b>Location :</b><br/> Ghatkopar, Mumbai, Maharastra, India</p>
                            <p className="pt-2"><b>Type :</b><br/> built up area, G+17 storeys</p>
                            <p className="pt-2"><b>Size :</b><br/> 70000 sq.ft</p>
                            <p className="pt-2"><b>Architect :</b><br/> APK & A Designers (Mr. Prashant Karwe)</p>
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

export default SocietyResidential
