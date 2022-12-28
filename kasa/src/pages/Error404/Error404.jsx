import { NavLink } from "react-router-dom";
import "./Error404.css";

function Error404() {
    return (
        <div className="error_404_redirect">
            <h1 className="error_404_title">404</h1>
            <span className="error_404_description">
                Oups! la page que vous {"\n"} demandez n'existe pas.
            </span>
            <NavLink className="back_to_home_page" to="/">Retourner sur la page d'accueil</NavLink>
        </div>
    )
}

export default Error404;