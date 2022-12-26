import React, { useState } from "react";
import "./Dropdown.css";
import rotateArrow from "../../assets/rotateArrow.svg";


// function Dropdown({ titre, description }) {
//     const [ouvert, setOuvert] = useState(false);
//     return (
//         <div className="dropdown" id={`dropdown-${titre}`}>
//             <div className="dropdown__header">
//                 <div className="dropdown__titre">{titre}</div>
//                 <span
//                     className={`dropdown__fleche ${ouvert}`}
//                     onClick={() => setOuvert(!ouvert)}
//                 >
//                     <img src={rotateArrow} alt="Ouvrir cette liste déroulante" />
//                 </span>
//             </div>
//             {
//                 ouvert && <div className="description__dropdown">{description}</div>
//             }
//         </div>
//     );
// }

function Dropdown({ titre, description }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="dropdown" id={`dropdown-${titre}`} onClick={
            () => setOpen(!open)}>
            <div className="dropdown_content">
                <div className="dropdown_titre">{titre}</div>
                <span
                    className={`dropdown_arrow ${open}`}
                    onClick={() => setOpen(!open)}
                >
                    <img src={rotateArrow} alt="Open this dropdown" />
                </span>
            </div>
            {
                open && <div className="dropdown_description">{description}</div>
            }
        </div >

    )
}








export default Dropdown;