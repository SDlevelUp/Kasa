import React, { useState } from "react";
import "./Collapse.css";
import rotateArrow from "../../assets/rotateArrow.svg";

function Collapse({ titre, description }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="collapse" id={`collapse-${titre}`} onClick={
            () => setOpen(!open)}>
            <div className="collapse-content">
                <div className="collapse-titre">{titre}</div>
                <span
                    className={`collapse-arrow ${open}`}
                    onClick={() => setOpen(!open)}
                >
                    <img src={rotateArrow} alt="Open this collapse" />
                </span>
            </div>
            {
                open && <div className="collapse-description">{description}</div>
            }
        </div >
    )
}

export default Collapse;