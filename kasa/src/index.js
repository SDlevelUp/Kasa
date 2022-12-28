import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Styles
import "./index.css";

// Import Pages 
import Home from "./pages/Home/Home";
import Rentals from "./pages/Rentals/Rentals";
import About from "./pages/About/About";
import Error404 from "./pages/Error404/Error404";

// Import Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Import About
import about from "../src/data/about.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products/:id" element={<Rentals />} />
                <Route path="/about" element={<About data={about} />} />
                <Route path="/404" element={<Error404/>} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();