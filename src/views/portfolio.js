import React from "react";

import Screen_Home from "../img/screen/screen_home.png";
import Screen_CV from "../img/screen/screen_cv.png";
import Screen_Contact from "../img/screen/screen_contact.png";
import Screen_Portfolio from "../img/screen/screen_portfolio.png";

import { Trans } from "react-i18next";

class Portfolio extends React.Component{
    render(){
        return(
            /*
            Container principal
            */            
            <div className="container-fluid min-vh-100">
                <div className="d-flex flex-column">
                    <div className='card text-white bg-secondary custom-portfolio-column-margin scale-up-center-other-pages custom-card-border-color'>
                        <div className='card-header'>
                            <h4 className='custom-card-header-text'><Trans i18nKey="portfolio.pw"></Trans></h4>
                        </div>
                        <div className='card-body pb-1 pb-md-2'>
                            <div className="flex-row">
                                <img src="https://cdn-icons-png.flaticon.com/512/4100/4100367.png" width="96px" height="96px"
                                     className="float-start me-2"/>
                                <div className="col">
                                    <div className="row">
                                        <h4 className="float-start"><Trans i18nKey="portfolio.p1"></Trans></h4>
                                        <h5 className="float-start custom-justify-text"><Trans i18nKey="portfolio.p1desc"></Trans></h5>
                                    </div>
                                    <div className="row-md justify-content-end">
                                        <button className="btn custom-contact-section-btn custom-btn-size float-end" 
                                                data-bs-toggle="modal" 
                                                data-bs-target="#staticBackdrop"><Trans i18nKey="portfolio.saibamais"></Trans>
                                        </button>
                                    </div>                                    
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                {/* 
                Modal referente ao Portfolio 
                */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-fullscreen">
                        <div className="modal-content bg-secondary w-100">
                            <div className="modal-header">
                                <h4 className="modal-title text-white" id="staticBackdropLabel"><Trans i18nKey="portfolio.pw"></Trans></h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {/* 
                            Conteúdo do modal de Portfolio 
                            */}
                            <div className="modal-body">
                                {/*
                                Galeria de imagens do projeto
                                */}
                                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner ">
                                        <div class="carousel-item active">
                                            <div className="d-flex justify-content-center">
                                                <img src={Screen_Home} class="d-block w-75" alt="..."/>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div className="d-flex justify-content-center">
                                                <img src={Screen_Portfolio} class="d-block w-75" alt="..."/>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div className="d-flex justify-content-center">
                                                <img src={Screen_CV} class="d-block w-75" alt="..."/>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div className="d-flex justify-content-center">
                                                <img src={Screen_Contact} class="d-block w-75" alt="..."/>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" 
                                            data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" 
                                            data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                {/*
                                Descrição do projeto
                                */}
                                <div className="col-10 offset-1 mt-4">
                                    <h4 className="text-white"><Trans i18nKey="projeto01modal.sobre"></Trans></h4>
                                    <h5 className="text-white text-justify"><Trans i18nKey="projeto01modal.sobredesc"></Trans></h5>
                                    <h4 className="text-white mt-4"><Trans i18nKey="projeto01modal.estrutura"></Trans></h4>                                   
                                    <h5 className="text-white">&emsp;<Trans i18nKey="projeto01modal.home"></Trans></h5>
                                    <h5 className="text-white">&emsp;&emsp;&emsp;<Trans i18nKey="projeto01modal.homedesc"></Trans></h5>
                                    <h5 className="text-white">&emsp;<Trans i18nKey="projeto01modal.portfolio"></Trans></h5>
                                    <h5 className="text-white">&emsp;&emsp;&emsp;<Trans i18nKey="projeto01modal.portfoliodesc"></Trans></h5>
                                    <h5 className="text-white">&emsp;<Trans i18nKey="projeto01modal.cv"></Trans></h5>
                                    <h5 className="text-white">&emsp;&emsp;&emsp;<Trans i18nKey="projeto01modal.cvdesc"></Trans></h5>
                                    <h5 className="text-white">&emsp;<Trans i18nKey="projeto01modal.contato"></Trans></h5>
                                    <h5 className="text-white">&emsp;&emsp;&emsp;<Trans i18nKey="projeto01modal.contatodesc"></Trans></h5>
                                    <h5 className="text-white">&emsp;<Trans i18nKey="projeto01modal.tema"></Trans></h5>
                                    <h5 className="text-white">&emsp;&emsp;&emsp;<Trans i18nKey="projeto01modal.temadesc"></Trans></h5>
                                    <h5 className="text-white">&emsp;<Trans i18nKey="projeto01modal.idioma"></Trans></h5>
                                    <h5 className="text-white">&emsp;&emsp;&emsp;<Trans i18nKey="projeto01modal.idiomadesc"></Trans></h5>
                                    <h5 className="text-white">&emsp;<Trans i18nKey="projeto01modal.frontend"></Trans></h5>
                                    <h5 className="text-white">&emsp;&emsp;&emsp;- React JS.</h5>
                                    <h5 className="text-white">&emsp;&emsp;&emsp;- Bootstrap.</h5>
                                    <a href="https://github.com/Alberto-Pereira/Portfolio" style={{textDecoration:'none'}} 
                                       target="_blank" title="Clique para acessar" alt="Link de acesso ao projeto no github">
                                        <h4 className="text-white mt-4">💼 Github</h4>
                                    </a>                                   
                                    <a href="https://portfolio-alberto-pereira.herokuapp.com/" style={{textDecoration:'none'}} 
                                       target="_blank" title="Clique para acessar" alt="Link de acesso ao projeto no heroku. Você pode testar a aplicação online.">
                                        <h4 className="text-white mt-4"><Trans i18nKey="projeto01modal.portfoliodesc02"></Trans></h4>
                                    </a>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn custom-contact-section-btn" data-bs-dismiss="modal">
                                    <Trans i18nKey="projeto01modal.fechar"></Trans>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;

