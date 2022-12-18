import React from "react";
import "./Banner.css"


function Banner({ image, text }) {
    return (
        <div className="banner">
            <img src={image} alt="Banner" className="banner__img" />
            <div className="banner__background"></div>
            {text ? <h1 className="banner__text">{text}</h1> : null}
        </div>
    );
};

export default Banner;