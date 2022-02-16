import { Moon, Language } from "./icons"

import { useNavigate } from "react-router-dom"

export default function Navbar() {
    let navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-dark custom-nav-color">
            <div className="container-fluid">
                <button className="btn btn-secondary me-1 p-1 mt-md-0 navbar-brand" 
                        onClick={() => {navigate("/");}}>Home</button>
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="mynavbar"> 
                    <div className="d-flex flex-md-row flex-column mt-1 mt-md-0">
                        
                        <button className="btn btn-secondary me-1 p-1 mt-1 mt-md-0" 
                                onClick={() => {navigate("/portfolio");}}>Portfólio</button>
                        <button className="btn btn-secondary me-1 p-1 mt-1 mt-md-0"
                                onClick={() => {navigate("/cv");}}>Currículo</button>
                        <button className="btn btn-secondary me-1 p-1 mt-1 mt-md-0"
                                onClick={() => {navigate("/contact");}}>Contato</button>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle me-1 p-1 mt-1 mt-md-0 custom-button-menu-width" 
                                            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><Moon/> Tema</button>
                            <ul className="dropdown-menu custom-dropdown-menu-width" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Escuro</a></li>
                                <li><a className="dropdown-item" href="#">Claro</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle mt-1 mt-md-0 custom-button-menu-width" 
                                    type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><Language/> Idioma</button>
                            <ul className="dropdown-menu custom-dropdown-menu-width" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Português</a></li>
                                <li><a className="dropdown-item" href="#">Inglês</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}