import "./CardsDisplay.css";
import Rentals from "../../data/rentals.json";
import { Link } from "react-router-dom";

function CardsDisplay() {
    return (
        <div className="cards_display">
            {Rentals.map((rental) => {
                return (
                    <div className="card" key={rental.id}>
                        <div className="card_image">
                            <Link to={"products/" + rental.id} className="card_link">
                                <div className="card_title">
                                    <h2>{rental.title}</h2>
                                </div>
                                <div className="card_cover">
                                    <img
                                        className="card_gallery"
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