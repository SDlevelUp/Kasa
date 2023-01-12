import React from "react";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <header>
            <nav className="navigation">
                <NavLink to="/">
                    <img src={logo} alt="Logo Kasa" className="nav-image" />
                </NavLink>
                <div>
                    <NavLink className="nav-link" to="/">
                        Accueil
                    </NavLink>
                    <NavLink className="nav-link" to="/about">
                        A Propos
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;