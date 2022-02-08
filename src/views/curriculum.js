import React from "react";

import {Download} from '../components/icons'

class Curriculum extends React.Component{
    render(){
        return(
            <div className="container-fluid custom-bg-color">
                <div className="row">
                    <div className="col-md-8 col-lg-4 offset-md-2 offset-lg-4">
                        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
                            <div className="card text-white bg-secondary" style={{width:'100%'}}>
                                <div className="card-header">
                                    <h4 className='custom-card-header-text text-center'>Currículo</h4>
                                </div>
                                <div className="card-body custom-card-body-padding">
                                <div className="row">
                                    <div className="col-6 border-end border-white" style={{maxHeight:'100%'}}>
                                        <div className="row justify-content-center">
                                            <button className="btn custom-contact-section-btn pt-2 pb-2" style={{width:'85%'}}>
                                                <Download/>
                                                <span className="custom-text-size-curriculum-section">Português</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row justify-content-center">
                                            <button className="btn custom-contact-section-btn pt-2 pb-2" style={{width:'85%'}}>
                                                <Download/>
                                                Inglês
                                            </button>
                                        </div>
                                    </div>
                                </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Curriculum;