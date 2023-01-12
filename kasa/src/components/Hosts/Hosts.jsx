import React from "react";
import "./Hosts.css";

function Hosts({ host }) {
    return (
        <div className="host-display">
            <div className="host-name">{host.name}</div>
            <img className="host-picture" src={host.picture} alt={host.name} />
        </div>
    );
}

export default Hosts;
