import React from "react";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <div id="header" className="center">
            <div>
                <img src={logo} alt="Logo Kasa" className="nav__img" />
            </div>

            <nav>
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/a_propos">
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;