import { Navigate, useParams } from "react-router-dom";
import Rentals from "../../data/rentals.json"


import "./RentalHome.css";


function RentalHome() {
    const { id } = useParams();
    const rental = Rentals.find((rental) => rental.id === id)
    if (!rental) {
        return <Navigate to="/" />
    };
    const {
        equipments,
        description,
        rating,
        pictures,
        tags,
        host,
        title,
        location,
    } = rental;








}




















export default RentalHome;