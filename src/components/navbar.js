export default function Navbar() {
    return (
        <nav className="navbar fixed-top custom-bg-color">
            <div className="container-fluid justify-content-end">
                <button className="btn btn-secondary me-1 p-1">Portfólio</button>
                <button className="btn btn-secondary me-1 p-1">Currículo</button>
                <button className="btn btn-secondary me-1 p-1">Contato</button>
            </div>
        </nav>
    )
}