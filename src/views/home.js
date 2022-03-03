import React from "react";

import {Github, Linkedin, Java, Spring, ReactIcon, Bootstrap, Postgre} from "../components/icons";
import pfp from "../img/pfp.png"

import { Trans } from "react-i18next";

class Home2 extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    <div className="col-md-10 custom-margin-top">
                        <div className="card bg-secondary scale-up-center custom-card-border-color mb-2 mb-xxl-0">
                            <div className="card-body mt-1 mb-1">
                                <div className="row">
                                    <div className="d-flex flex-column col-md-4 align-items-center scale-up-center-content">
                                        <img src={pfp} width="288" height="288" 
                                            className="img-thumbnail rounded-circle  mt-xl-4 mt-0" alt="Imagem de perfil" 
                                            title="Imagem de perfil">
                                        </img>
                                        <h4 className="custom-color mt-4 text-white custom-name-text-size">Alberto Pereira Felisberto</h4>
                                        <h2 className="custom-color text-white custom-text-size"><Trans i18nKey="home.dev"></Trans></h2>
                                        <div className="mb-4 mt-2">
                                            <a type="button" className="btn btn-light me-1 me-lg-0" title="Linkedin" role="button"
                                            alt="Botão com link de acesso ao linkedin."
                                            href="https://www.linkedin.com/in/alberto-pereira-felisberto/" target="_blank" rel="noreferrer">
                                            <Linkedin/>
                                            </a>
                                            <a type="button" className="btn btn-light" title="Github" role="button" 
                                            alt="Botão com link de acesso ao github."
                                            href="https://github.com/Alberto-Pereira" target="_blank" rel="noreferrer">
                                            <Github/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-8 border-start border-4 rounded-3 border-white scale-up-center-content">
                                        <h3 className="custom-title-color"><Trans i18nKey="home.sobre"></Trans></h3>
                                        <div className="d-flex flex-column align-items-center">
                                            <h5 className="custom-color custom-justify-text text-white ps-3 pe-3">
                                                <Trans i18nKey="home.sobremim"></Trans></h5>
                                        </div>
                                        <h3 className="custom-title-color text-start mt-xxl-3 mb-xxl-3 mb-1"><Trans i18nKey="home.tecnologias"></Trans></h3>
                                        <div className="d-flex flex-xl-row flex-column justify-content-evenly align-items-center 
                                                text-center tecnology-session text-white mt-xxl-4 mt-2">
                                            <div className="col border bg-light rounded-2 mb-2 mb-xl-0" style={{flexGrow:'0'}}>
                                                <Java/>
                                                <h5 className="custom-text-color mt-2 pt-2 border-top border-1 ">Java</h5>
                                            </div>
                                            <div className="col border bg-light rounded-2 mb-2 mb-xl-0" style={{flexGrow:'0'}}>
                                                <Spring/>
                                                <h5 className="custom-text-color mt-2 pt-2 border-top border-1">Spring Boot</h5>
                                            </div>
                                            <div className="col border bg-light rounded-2 mb-2 mb-xl-0" style={{flexGrow:'0'}}>
                                                <ReactIcon/>
                                                <h5 className="custom-text-color mt-2 pt-2 border-top border-1">React JS</h5>
                                            </div>
                                            <div className="col border bg-light rounded-2 mb-2 mb-xl-0" style={{flexGrow:'0'}}>
                                                <Bootstrap/>
                                                <h5 className="custom-text-color mt-2 pt-2 border-top border-1">Bootstrap</h5>
                                            </div>
                                            <div className="col border bg-light rounded-2" style={{flexGrow:'0'}}>
                                                <Postgre/>
                                                <h5 className="custom-text-color mt-2 pt-2 border-top border-1">Postgre SQL</h5>
                                            </div>
                                            
                                        </div>
                                        <h3 className="custom-title-color mt-xxl-4 mt-2"><Trans i18nKey="home.certificacoes"></Trans></h3>
                                        <h5 className="custom-color text-white custom-first-letter ps-3 pe-3"><Trans i18nKey="home.graduacao"></Trans></h5>
                                        <h6 className="custom-color text-white ps-3 pe-3">PUC Goiás | 2018 - 2020</h6>
                                        <h5 className="custom-color text-white custom-first-letter ps-3 pe-3"><Trans i18nKey="home.udemy"></Trans></h5>
                                        <h6 className="custom-color text-white ps-3 pe-3">Udemy | 2022</h6>
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

export default Home2;