import React from "react";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <nav className="navigation">
            <NavLink to="/">
                <img src={logo} alt="Logo Kasa" className="nav_image" />
            </NavLink>
            <div>
                <NavLink className="nav_link" to="/">
                    Accueil
                </NavLink>
                <NavLink className="nav_link" to="/about">
                    A Propos
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;