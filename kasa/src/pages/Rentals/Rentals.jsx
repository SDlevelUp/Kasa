import { Navigate, useParams } from "react-router-dom";
import Products from "../../data/rentals.json"
import Collapse from "../../components/Collapse/Collapse";
import Tags from "../../components/Tags/Tags";
import Carrousel from "../../components/Carrousel/Carrousel";
import Hosts from "../../components/Hosts/Hosts"
import { Ratings } from "../../components/Ratings/Ratings";

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

    const ratings = [1, 2, 3, 4, 5].map((n) => (
        <Ratings key={n} selected={n <= Number(rating)} />
    ));

    const equipementsRental = equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>;
    });

    return (
        <>
            <div className="rental_display">
                <Carrousel pictures={pictures} />
                <div className="rental_content">
                    <div className="rental_informations">
                        <h1 className="rental_title">{title}</h1>
                        <p className="rental_location">{location}</p>
                        <div className="rental_tags">
                            {tags.map((tag, index) => (
                                <Tags key={index} citytag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="rental_rating_host">
                        <Hosts host={host} />
                        <div className="rental_ratings">{ratings}</div>
                    </div>
                </div>
                <div className="rental_description_equipments">
                    <Collapse
                        className="rental_description"
                        titre="Description"
                        description={description}
                    />
                    <Collapse
                        className="rental_equipment"
                        titre="Équipements"
                        description={equipementsRental}
                    />
                </div>
            </div>
        </>
    );
}

export default Rental;