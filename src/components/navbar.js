import { Moon, Language } from "./icons"

import { useNavigate } from "react-router-dom"

export default function Navbar() {
    let navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-dark custom-nav-color">
            <div className="container-fluid">
                {/* Botão Home no canto esquerdo */}
                <button className="btn btn-secondary me-1 p-1 mt-md-0 navbar-brand" 
                        onClick={() => {navigate("/");}}>Home
                </button>
                {/* Botão Toggler no canto direito < md-size 
                | Abre e fecha a navbar encolhida */}
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Navbar encolhida < md-size */}
                <div className="collapse navbar-collapse justify-content-end" id="mynavbar"> 
                    {/* Navbar em row >= md-size 
                    | Em coluna < md-size */}
                    <div className="d-flex flex-md-row flex-column mt-1 mt-md-0">
                        {/* Conteúdo da navbar */}
                        <button className="btn btn-secondary me-1 p-1 mt-1 mt-md-0" 
                                onClick={() => {navigate("/portfolio");}}
                                data-bs-toggle={window.innerWidth < 760 ? "collapse" : ""} data-bs-target="#mynavbar">Portfólio</button>
                        <button className="btn btn-secondary me-1 p-1 mt-1 mt-md-0"
                                onClick={() => {navigate("/cv");}}
                                data-bs-toggle={window.innerWidth < 760 ? "collapse" : ""} data-bs-target="#mynavbar">Currículo</button>
                        <button className="btn btn-secondary me-1 p-1 mt-1 mt-md-0"
                                onClick={() => {navigate("/contact");}}
                                data-bs-toggle={window.innerWidth < 760 ? "collapse" : ""} data-bs-target="#mynavbar">Contato</button>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle me-1 p-1 mt-1 mt-md-0 custom-button-menu-width" 
                                            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><Moon/> Tema</button>
                            <ul className="dropdown-menu custom-dropdown-menu-width" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#"
                                       data-bs-toggle={window.innerWidth < 760 ? "collapse" : ""} 
                                       data-bs-target="#mynavbar">Escuro</a>
                                </li>
                                <li><a className="dropdown-item" href="#"
                                       data-bs-toggle={window.innerWidth < 760 ? "collapse" : ""} 
                                       data-bs-target="#mynavbar">Claro</a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle mt-1 mt-md-0 custom-button-menu-width" 
                                    type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><Language/> Idioma</button>
                            <ul className="dropdown-menu custom-dropdown-menu-width" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#"
                                       data-bs-toggle={window.innerWidth < 760 ? "collapse" : ""} 
                                       data-bs-target="#mynavbar">Português</a>
                                </li>
                                <li><a className="dropdown-item" href="#"
                                       data-bs-toggle={window.innerWidth < 760 ? "collapse" : ""} 
                                       data-bs-target="#mynavbar">Inglês</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

