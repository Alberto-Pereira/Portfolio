import React from "react";

class Portfolio extends React.Component{
    render(){
        return(
            <div className="container-fluid custom-bg-color min-vh-100">
                <div className="d-flex flex-column">
                    <div className='card text-white bg-secondary custom-portfolio-column-margin'>
                        <div className='card-header '>
                            <h4 className='custom-card-header-text'>Portfólio – Website</h4>
                        </div>
                        <div className='card-body'>
                            <div className="flex-row">
                                <img src="https://cdn-icons-png.flaticon.com/512/4100/4100367.png" width="96px" height="96px"
                                     className="float-start me-2"/>
                                <div className="col">
                                    <div className="row">
                                    <h4 className="float-start">Jan 2022 – Presente</h4>
                                    <h5 className="float-start custom-justify-text">Website construído com React JS e Bootstrap para apresentar meus 
                                                            trabalhos concluídos e suas etapas de desenvolvimento. A aplicação
                                                            também conta com opções de contato e acessibilidade.</h5>
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

export default Portfolio;

{/* <div className="d-flex flex-column ">
                    <div className="flex-row custom-portfolio-column-margin">
                        <div className="col-1">
                                
                        </div>
                        <div className="col">
                        <h4>Portfólio - Website</h4>
                        </div>
                    </div>
                    <div className="col ">
                        
                        <div className="col">
                            
                        </div>
                    </div>
                </div> */}