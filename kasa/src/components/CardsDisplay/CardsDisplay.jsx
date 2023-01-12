import "./CardsDisplay.css";
import Rentals from "../../data/rentals.json";
import { Link } from "react-router-dom";

function CardsDisplay() {
    return (
        <div className="cards-display">
            {Rentals.map((rental) => {
                return (
                    <div className="card" key={rental.id}>
                        <div className="card-image">
                            <Link to={"products/" + rental.id} className="card-link">
                                <h2 className="card-title">
                                    {rental.title}
                                </h2>
                                <div className="card-cover">
                                    <img
                                        className="card-gallery"
                                        src={rental.cover}
                                        alt={rental.title}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CardsDisplay;