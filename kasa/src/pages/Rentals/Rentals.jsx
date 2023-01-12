import { Navigate, useParams } from "react-router-dom";
import Products from "../../data/rentals.json"
import Collapse from "../../components/Collapse/Collapse";
import Tags from "../../components/Tags/Tags";
import Carrousel from "../../components/Carrousel/Carrousel";
import Hosts from "../../components/Hosts/Hosts"
import Ratings from "../../components/Ratings/Ratings";

import "./Rentals.css";

function Rental() {
    const { id } = useParams();
    const product = Products.find((product) => product.id === id);
    console.log(product)
    if (!product) {
        return <Navigate to="/404" />;
    }
    const {
        equipments,
        description,
        rating,
        pictures,
        tags,
        host,
        title,
        location,
    } = product;

    const equipementsRental = equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>;
    });

    return (
        <>
            <div className="rental-display">
                <Carrousel pictures={pictures} />
                <div className="rental-content">
                    <div className="rental-informations">
                        <div className="w-rental-title-location">
                            <h1 className="rental-title">{title}</h1>
                            <p className="rental-location">{location}</p>
                        </div>
                        <div className="rental-tags">
                            {tags.map((tag, index) => (
                                <Tags key={index} citytag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="rental-rating-host">
                        <Hosts host={host} />
                        <Ratings ratingScale={rating} />
                    </div>
                </div>
                <div className="rental-description-equipments">
                    <Collapse
                        className="rental-description"
                        titre="Description"
                        description={description}
                    />
                    <Collapse
                        className="rental-equipment"
                        titre="Équipements"
                        description={equipementsRental}
                    />
                </div>
            </div>
        </>
    );
}

export default Rental;