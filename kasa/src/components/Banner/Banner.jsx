import React from "react";
import "./Banner.css"


function Banner({ image, text }) {
    return (
        <div className="banner">
            <img src={image} className="banner_img" alt="Banner" />
            <div className="banner_background"></div>
            {text ? <h1 className="banner_text">{text}</h1> : null}
        </div>
    );
};

export default Banner;