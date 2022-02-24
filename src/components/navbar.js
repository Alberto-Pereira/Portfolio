import { Moon, Language } from "./icons"

import { useNavigate } from "react-router-dom"
import i18n from "./i18next";
import { Trans } from "react-i18next"
 
import DarkTheme from "../components/dark-theme"

export default function Navbar() {
    let navigate = useNavigate();

    function changeLanguageENUS () {
        i18n.changeLanguage('en');
        window.location.reload();
        
    }

    function changeLanguagePTBR () {
        i18n.changeLanguage('ptbr');
        window.location.reload();
    }

    return (
        <nav className={localStorage.getItem("theme") === "dark" ? 
            "navbar navbar-expand-md fixed-top navbar-dark custom-nav-color darkMode" : 
            "navbar navbar-expand-md fixed-top navbar-dark custom-nav-color custom-bg-color"}>
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
                                data-bs-toggle={window.innerWidth < 760 ? "collapse" : ""} data-bs-target="#mynavbar">
                                <Trans i18nKey="navbar.portfolio"></Trans>
                        </button>
                        <button className="btn btn-secondary me-1 p-1 mt-1 mt-md-0"
                                onClick={() => {navigate("/cv");}}
                                data-bs-toggle={window.innerWidth < 760 ? "collapse" : ""} data-bs-target="#mynavbar">
                                <Trans i18nKey="navbar.cv"></Trans>
                        </button>
                        <button className="btn btn-secondary me-1 p-1 mt-1 mt-md-0"
                                onClick={() => {navigate("/contact");}}
                                data-bs-toggle={window.innerWidth < 760 ? "collapse" : ""} data-bs-target="#mynavbar">
                                <Trans i18nKey="navbar.contato"></Trans>
                        </button>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle me-1 p-1 mt-1 mt-md-0 custom-button-menu-width" 
                                            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><Moon/> 
                                            <Trans i18nKey="navbar.tema"></Trans>
                            </button>
                            <ul className="dropdown-menu custom-dropdown-menu-width" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#"
                                       data-bs-toggle={window.innerWidth < 760 ? "collapse" : ""} 
                                       data-bs-target="#mynavbar" onClick={e => DarkTheme("dark")}>
                                       <Trans i18nKey="navbar.escuro"></Trans>
                                    </a>
                                </li>
                                <li><a className="dropdown-item" href="#"
                                       data-bs-toggle={window.innerWidth < 760 ? "collapse" : ""} 
                                       data-bs-target="#mynavbar" onClick={e => DarkTheme("light")}>
                                       <Trans i18nKey="navbar.claro"></Trans>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle mt-1 mt-md-0 custom-button-menu-width" 
                                    type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><Language/> 
                                    <Trans i18nKey="navbar.idioma"></Trans>
                            </button>
                            <ul className="dropdown-menu custom-dropdown-menu-width" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#"
                                       data-bs-toggle={window.innerWidth < 760 ? "collapse" : ""} 
                                       data-bs-target="#mynavbar" onClick={changeLanguagePTBR}>
                                       <Trans i18nKey="navbar.portugues"></Trans>
                                    </a>
                                </li>
                                <li><a className="dropdown-item" href="#"
                                       data-bs-toggle={window.innerWidth < 760 ? "collapse" : ""} 
                                       data-bs-target="#mynavbar" onClick={changeLanguageENUS}>
                                       <Trans i18nKey="navbar.ingles"></Trans>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

