import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navBar navbar-dark bg-dark"> 
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Inicio</NavLink>
                <NavLink className="navbar-brand" to="/contacto">Contacto</NavLink>
                <NavLink className="navbar-brand" to="/blog">Blog</NavLink>
            </div>
        </div>
)}  