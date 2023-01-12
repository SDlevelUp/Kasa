import { NavLink } from "react-router-dom";
import "./Error404.css";

function Error404() {
    return (
        <div className="error-404-redirect">
            <h1 className="error-404-title">404</h1>
            <span className="error-404-description">
                Oups! la page que vous {"\n"} demandez n'existe pas.
            </span>
            <NavLink className="back-to-home-page" to="/">Retourner sur la page d'accueil</NavLink>
        </div>
    )
}

export default Error404;