
// import Rentals from "../../data/rentals.json"
// import Dropdown from "../../components/Dropdown/Dropdown";
// import { useParams } from "react-router-dom";
// import Footer from "../../components/Footer/Footer"

// import "./RentalsPage.css";


// function RentalsPage() {
//     const { id } = useParams();
//     const rental = Products.find((product) => product.id === id)
//     // if (!product) {
//     //     // return (
//     //     //     // < Error404 />
//     //     // )
//     // }

//     const key = rental.id;
//     const pictures = rental.pictures;
//     const title = rental.title;
//     const location = rental.location;
//     const tags = rental.tags;
//     const host = rental.host;
//     const rating = rental.rating;
//     const description = rental.description;
//     const equipments = rental.equipments;

//     return (
//         <main className="products__main">
//             <Carroussel
//                 key={key}
//                 pictures={pictures}
//             />

//             <section className="products_info">
//                 <RentalsInformations
//                     key={key}
//                     product={product}
//                     title={title}
//                     location={location}
//                     tags={tags}
//                     host={host}
//                     rating={rating}
//                 />
//             </section>
//             <section className="rentals__dropdown">
//                 <div className="rentals__dropdown__description">
//                     <Dropdown
//                         titre="Description"
//                         description={description}
//                     />
//                     <div className="rentals__dropdown__equipments">
//                         <Dropdown
//                             title="Equipements"
//                             texte={equipments.map((infos) => (
//                                 <li className="list_equipments">{infos}</li>
//                             )
//                             )}
//                         />
//                     </div>
//                 </div>
//             </section>
//         </main>
//     )
// }

// export default RentalsPage;