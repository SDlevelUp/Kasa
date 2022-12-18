import "./CardsDisplay.css";
import Rentals from "../../data/rentals.json";
import { Link } from "react-router-dom";

function CardsDisplay() {
    return (
        <div className="cards__display">
            {/* generation des cards */}
            {Rentals.map((rental) => {
                return (
                    <div className="card" key={rental.id}>
                        <div className="card__image">
                            <Link to={"products/" + rental.id} className="card__link">
                                <div className="card__title">
                                    <h2>{rental.title}</h2>
                                </div>
                                <div className="card__cover">
                                    <img
                                        className="card__gallery"
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