import React from "react";
import "./Banner.css"


function Banner({ image, text }) {
    return (
        <div className="banner">
            <img src={image} className="banner-img" alt="Banner" />
            <div className="banner-background"></div>
            {text ? <h1 className="banner-text">{text}</h1> : null}
        </div>
    );
};

export default Banner;