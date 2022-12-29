import React from "react";
import "./Ratings.css"

import redStar from "../../assets/redStar.png"
import greyStar from "../../assets/greyStar.png"


function Ratings(props) {
    const ratingScale = props.ratingScale
    const order = [1, 2, 3, 4, 5]

    return (
        <div className="rental_ratings">
            {order.map((orderElem) =>
                ratingScale >= orderElem ?
                    <img key={orderElem.toString()} src={redStar} alt="Rating Scale" /> :
                    <img key={orderElem.toString()} src={greyStar} alt="Rating Scale" />
            )}
        </div>
    )
}

export default Ratings;


