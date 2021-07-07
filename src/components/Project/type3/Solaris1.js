import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const Solaris1 = () => {
    return (
        <div>
            <Header/>
                <section className="page-header">
                        <h1 className="text-white text-center">Solaris 1, at Raheja district 1 <br/> Raheja Universal</h1>
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
                            <h3 className="pt-3">Solaris 1, at Raheja district 1 <br/> Raheja Universal</h3><hr/>
                            <p className="pt-2"><b>Location :</b><br/> Navi  Mumbai, Maharastra, India</p>
                            <p className="pt-2"><b>Type :</b><br/> built of area, Residential Project, G+30 with 2 Buildings.</p>
                            <p className="pt-2"><b>Size :</b><br/> 4 Lakhs sq.ft</p>
                            <p className="pt-2"><b>Architect :</b><br/> M/s. GA Design, Mumbai.e</p>
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

export default Solaris1
