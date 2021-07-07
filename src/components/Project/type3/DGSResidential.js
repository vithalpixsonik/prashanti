import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const DGSResidential = () => {
    return (
        <div>
            <Header/>
                <section className="page-header">
                        <h1 className="text-white text-center">DGS Residential<br/>(DGS Group)</h1>
                </section>
                <div className="container mt-5 mb-5">
                    <div className="m-4 p-3">
                    <div className="row mt-3">
                        <div className="col-lg-6">
                            <div className="shadow">
                            <img src="/images/Photos/type3/6. DGS Residential.jpg" className="img-fluid p-4" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card shadow p-4">
                            <h3 className="pt-3">DGS Residential<br/>(DGS Group)</h3><hr/>
                            <p className="pt-2"><b>Location :</b><br/> Khar, Mumbai, Maharastra, India</p>
                            <p className="pt-2"><b>Type :</b><br/>  built up area, G+13 storeys </p>
                            <p className="pt-2"><b>Size :</b><br/> 50,000  sq.ft</p>
                            <p className="pt-2"><b>Architect :</b><br/> Studio 30 Architecture</p>
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

export default DGSResidential
