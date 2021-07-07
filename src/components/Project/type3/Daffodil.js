import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const Daffodil = () => {
    return (
        <div>
            <Header/>
                <section className="page-header">
                        <h1 className="text-white text-center">Daffodil, Residential Building<br/>(Shree Krishna Construction)</h1>
                </section>
                <div className="container mt-5 mb-5">
                    <div className="m-4 p-3">
                    <div className="row mt-3">
                        <div className="col-lg-6">
                            <div className="shadow">
                            <img src="/images/Photos/type3/9. Daffodil, Residential Building.jpg" className="img-fluid p-4" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card shadow p-4">
                            <h3 className="pt-3">Daffodil, Residential Building<br/>(Shree Krishna Construction)</h3><hr/>
                            <p className="pt-2"><b>Location :</b><br/> Bhandup, Mumbai, Maharastra, India</p>
                            <p className="pt-2"><b>Type :</b><br/> built up area, (2 buildings, 22 storey</p>
                            <p className="pt-2"><b>Size :</b><br/> 1.2 Lakhs sq.ft</p>
                            <p className="pt-2"><b>Architect :</b><br/> M/s. Mayuree Consultants at Ghatkopar.</p>
                            <p className="pt-2"><b>Scope :</b><br/> PF</p>
                            </div>
                        </div>
                    </div>
                
                    </div>
                </div>    
            <Footer/>
        </div>
    )
}

export default Daffodil
