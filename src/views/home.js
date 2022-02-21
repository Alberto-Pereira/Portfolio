import React from "react";

import {Github, Linkedin, Java, Spring, ReactIcon, Bootstrap, Postgre} from "../components/icons";
import baby_yoda from "../img/baby_yoda.jpg"

class Home extends React.Component{
    render(){
        return(
            <div className="container-fluid custom-bg-color">
                <div className="row align-items-center min-vh-100">
                    <div className="col-lg-3">
                        <div className="d-flex flex-column align-items-center text-justify">
                            <img src={baby_yoda} 
                                 width="288" height="288" 
                                 className="img-thumbnail rounded-circle custom-image-margin" alt=""/>
                            <br/>
                            <h4 className="custom-color">Alberto Pereira Felisberto</h4>
                            <h2 className="custom-color">Programador FullStack</h2>
                            <br/>
                            <div>
                                <a type="button" className="btn btn-light me-1 me-lg-0" title="Linkedin" role="button"
                                   href="https://www.linkedin.com/in/alberto-pereira-felisberto/" target="_blank" rel="noreferrer">
                                   <Linkedin/>
                                </a>
                                <a type="button" className="btn btn-light" title="Github" role="button"
                                   href="https://github.com/Alberto-Pereira" target="_blank" rel="noreferrer">
                                    <Github/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 p-3">
                        <h3 className="custom-title-color">| Sobre:</h3>
                        <div className="d-flex flex-column align-items-center">
                            <h5 className="custom-color custom-justify-text">Formado em Análise e Desenvolvimento de Sistemas pela PUC-GO. Realizei diversos projetos acadêmicos com foco em MVC e CRUD, utilizando a linguagem Java e 
                                seus principais frameworks. No momento me aprofundo em Spring Boot e React JS.</h5>
                        </div>
                        <br/>
                        <h3 className="custom-color text-start">| Tecnologias:</h3>
                        <div className="d-flex flex-md-row flex-column justify-content-evenly align-items-center text-center tecnology-session">
                            <Java/>
                            <Spring/>
                            <ReactIcon/>
                            <Bootstrap/>
                            <Postgre/>
                        </div>
                        <br/>
                        <h3 className="custom-color">| Certificações:</h3>
                        <h5 className="custom-color">★ Graduação - Análise e Desenvolvimento de Sistemas</h5>
                        <h6 className="custom-color">PUC Goiás - Período: 2018 - 2020</h6>
                        <h5 className="custom-color">★ Certificado - Spring Boot + React JS: Desenvolva Aplicações Web Completas</h5>
                        <h6 className="custom-color">Udemy - Período: 2022</h6>
                        <br/>
                        <br/>
                        <br/>
                        <div className="d-flex text-center">
                            <div className="flex-fill ">
                                <h3 className="custom-color">"Com grandes poderes, vêm grandes responsabilidades"</h3>
                                <h4 className="custom-color">- Ben Parker</h4>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        )
    }
}

export default Home