import React from "react";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <nav className="navigation">
            <NavLink to="/">
                <img src={logo} alt="Logo Kasa" />
            </NavLink>
            <div>
                <NavLink className="nav__links" to="/">
                    Acceuil
                </NavLink>
                <NavLink className="nav__links" to="/about">
                    A propos
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;