import React from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'

const FernForestBathResort = () => {
    return (
        <div>
            <Header/>
            <section className="page-header">
                    <h1 className="text-white text-center">Fern Forest Bath Resort<br/> (phase 1+2) </h1>
            </section>
            <div className="container mt-5 mb-5">
                <div className="m-4 p-3">
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <div className="shadow">
                        <img src="/images/Photos/type4/3. Fern Forest Bath Resort, (phase 1+2).jpg" className="img-fluid p-4" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card shadow p-4">
                        <h3 className="pt-3">Fern Forest Bath Resort<br/> (phase 1+2) </h3><hr/>
                        <p className="pt-2"><b>Location :</b><br/> Badlapur, Maharastra, India</p>
                        <p className="pt-2"><b>Type :</b><br/> 100 no. rooms. (phase 1+2)</p>
                        <p className="pt-2"><b>Size :</b><br/> 1,50,000 sq.ft built up area,</p>
                        <p className="pt-2"><b>Architect :</b><br/> Arun Kumar Designers & Consultants Pvt. Ltd.</p>
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

export default FernForestBathResort
