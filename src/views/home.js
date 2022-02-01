import React from "react";

import {Github, Linkedin, Java, Spring, ReactIcon, Bootstrap, Postgre} from "../components/icons";
import baby_yoda from "../img/baby_yoda.jpg"



class Home extends React.Component{
    render(){
        return(
            <div className="container-fluid custom-bg-color">
                <div className="row align-items-center min-vh-100">
                    <div className="col-md-3">
                        <div className="d-flex flex-column align-items-center text-justify">
                            <img src={baby_yoda} className="img-thumbnail rounded-circle w-75"/>
                            <br/>
                            <h4 className="custom-color">Alberto Pereira Felisberto</h4>
                            <h2 className="custom-color">Programador FullStack</h2>
                            <br/>
                            <div>
                                <button type="button" className="btn btn-light" title="Linkedin">
                                   <Linkedin/>
                                </button>
                                <button type="button" className="btn btn-light" title="Github">
                                    <Github/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 p-3">
                        <h3 className="custom-color">| Sobre:</h3>
                        <div className="d-flex flex-column align-items-center">
                            <h5 className="custom-color custom-justify-text">Formado em Análise e Desenvolvimento de Sistemas pela PUC-GO. Realizei diversos projetos acadêmicos com foco em MVC e CRUD, utilizando a linguagem Java e 
                                seus principais frameworks. No momento me aprofundo em Spring Boot e React JS.</h5>
                        </div>
                        <br/>
                        <h3 className="custom-color text-start">| Tecnologias:</h3>
                        <div className="d-flex flex-wrap ">
                            <div className="flex-fill">
                                <div className="align-self-center">
                                    <Java/>
                                    <h5 className="custom-color p-2 order-1">Java</h5>
                                </div>
                                
                                
                            </div>
                            <div className="flex-fill">
                                <Spring/>
                                <h5 className="custom-color p-2 order-2">Spring Boot</h5>
                            </div>
                            <div className="flex-fill">
                                <ReactIcon/>
                                <h5 className="custom-color p-2 order-3">React JS</h5>
                            </div>
                            <div className="flex-fill">
                                <Bootstrap/>
                                <h5 className="custom-color p-2 order-4">Bootstrap</h5>
                            </div>
                            <div className="flex-fill">
                                <Postgre/>
                                <h5 className="custom-color p-2 order-5">PostgreSQL</h5>
                            </div>
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
                            <div className="flex-fill">
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