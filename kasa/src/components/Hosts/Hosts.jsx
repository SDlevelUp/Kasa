import React from "react";
import "./Hosts.css";

function Hosts({ host }) {
    return (
        <div className="host_display">
            <div className="host_name">{host.name}</div>
            <img className="host_picture" src={host.picture} alt={host.name} />
        </div>
    );
}

export default Hosts;
