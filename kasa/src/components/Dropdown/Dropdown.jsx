import React, { useState } from "react";
import "./Dropdown.css";
import rotateArrow from "../../assets/rotateArrow.svg";


function Dropdown({ titre, description }) {
    const [ouvert, setOuvert] = useState(false);
    return (
        <div className="dropdown" id={`dropdown-${titre}`}>
            <div className="dropdown__header">
                <div className="dropdown__titre">{titre}</div>
                <span
                    className={`dropdown__fleche ${ouvert}`}
                    onClick={() => setOuvert(!ouvert)}
                >
                    <img src={rotateArrow} alt="Ouvrir cette liste déroulante" />
                </span>
            </div>
            {
                ouvert && <div className="description__dropdown">{description}</div>
            }
        </div>
    );
}

export default Dropdown;