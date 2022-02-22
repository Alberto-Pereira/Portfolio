import React from "react";

import {Download} from '../components/icons'

class Curriculum extends React.Component{
    render(){
        return(
            <div className="container-fluid custom-bg-color">
                <div className="row">
                    <div className="col-md-8 col-lg-4 offset-md-2 offset-lg-4">
                        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
                            <div className="card text-white bg-secondary scale-up-center-other-pages" style={{width:'100%'}}>
                                <div className="card-header">
                                    <h4 className='custom-card-header-text text-center'>Currículo</h4>
                                </div>
                                <div className="card-body custom-card-body-padding">
                                <div className="row">
                                    <div className="col-6 border-end border-white" style={{maxHeight:'100%'}}>
                                        <div className="row justify-content-center">
                                            <a className="btn custom-contact-section-btn pt-2 pb-2" 
                                               href="https://drive.google.com/file/d/19enxOu0zjdkl_S0y5OZorVCN4MzXIHQZ/view?usp=sharing" 
                                               role="button" style={{width:'85%'}} target="_blank" rel="noreferrer" 
                                               title="Baixar em Português">
                                                <Download/>Português
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row justify-content-center">
                                            <a className="btn custom-contact-section-btn pt-2 pb-2" 
                                               href="https://drive.google.com/file/d/1D2on-gP8hB_9fHb-ZluuJXizq8ak8I0W/view?usp=sharing" 
                                               role="button" style={{width:'85%'}} target="_blank" rel="noreferrer"
                                               title="Baixar em Inglês">
                                                <Download/>Inglês
                                            </a>
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