import React from "react";

import {Github, Linkedin, Java, Spring, ReactIcon, Bootstrap, Postgre} from "../components/icons";
import baby_yoda from "../img/baby_yoda.jpg"

class Home2 extends React.Component{
    render(){
        return(
            <div className="container-fluid custom-bg-color">
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    <div className="col-md-10">
                        <div className="card bg-secondary">
                            <div className="card-body mt-1 mb-1">
                                <div className="row">
                                    <div className="d-flex flex-column col-md-4 align-items-center ">
                                        <img src={baby_yoda} width="288" height="288" 
                                            className="img-thumbnail rounded-circle custom-image-margin mt-4" alt="Imagem de perfil">
                                        </img>
                                        <h4 className="custom-color mt-4 text-white">Alberto Pereira Felisberto</h4>
                                        <h2 className="custom-color text-white">Programador Full Stack</h2>
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
                                    <div className="col-md-8 border-start border-4 rounded-3 border-white">
                                        <h3 className="custom-title-color">Sobre:</h3>
                                        <div className="d-flex flex-column align-items-center">
                                            <h5 className="custom-color custom-justify-text text-white ps-3 pe-3">Formado em Análise e Desenvolvimento de 
                                                Sistemas pela PUC-GO. Realizei diversos projetos acadêmicos com foco em MVC e CRUD, 
                                                utilizando a linguagem Java e seus principais frameworks. 
                                                No momento me aprofundo em Spring Boot e React JS.</h5>
                                        </div>
                                        <h3 className="custom-title-color text-start mt-3 mb-3">Tecnologias:</h3>
                                        <div className="d-flex flex-md-row flex-column justify-content-evenly align-items-center 
                                                text-center tecnology-session text-white">
                                            <Java/>
                                            <Spring/>
                                            <ReactIcon/>
                                            <Bootstrap/>
                                            <Postgre/>
                                        </div>
                                        <h3 className="custom-title-color mt-3">Certificações:</h3>
                                        <h5 className="custom-color text-white custom-first-letter ps-3 pe-3">★ Graduação - Análise e Desenvolvimento de Sistemas</h5>
                                        <h6 className="custom-color text-white ps-3 pe-3">PUC Goiás | 2018 - 2020</h6>
                                        <h5 className="custom-color text-white custom-first-letter ps-3 pe-3">★ Certificado - Spring Boot + React JS: Desenvolva Aplicações Web Completas</h5>
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