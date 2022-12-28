import React from "react";
import "./Tags.css";

const Tags = ({ citytag }) => {
    return (
        <div className="tagCity">
            <p className="tagCity_text">{citytag}</p>
        </div>
    );
};

export default Tags;
