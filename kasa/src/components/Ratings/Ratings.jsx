import React from "react";
import "./Ratings.css"

import redStar from "../../assets/redStar.png"
import greyStar from "../../assets/greyStar.png"


function Ratings(props) {
    const ratingScale = props.ratingScale
    const order = [1, 2, 3, 4, 5]

    return (
        <div className="rental-ratings">
            {order.map((orderElem) =>
                ratingScale >= orderElem ?
                    <img key={orderElem} src={redStar} alt="Rating Scale" /> :
                    <img key={orderElem} src={greyStar} alt="Rating Scale" />
            )}
        </div>
    )
}

export default Ratings;