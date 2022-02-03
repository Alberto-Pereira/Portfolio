import { Moon, Language } from "./icons"

export default function Navbar() {
    return (
        <nav className="navbar fixed-top custom-bg-color">
            <div className="container-fluid justify-content-end">
                <button className="btn btn-secondary me-1 p-1">Portfólio</button>
                <button className="btn btn-secondary me-1 p-1">Currículo</button>
                <button className="btn btn-secondary me-1 p-1">Contato</button>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" 
                            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><Moon/> Tema</button>
                    <ul className="dropdown-menu custom-dropdown-menu-width" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Escuro</a></li>
                        <li><a className="dropdown-item" href="#">Claro</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" 
                            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><Language/> Idioma</button>
                    <ul className="dropdown-menu custom-dropdown-menu-width" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Português</a></li>
                        <li><a className="dropdown-item" href="#">Inglês</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}