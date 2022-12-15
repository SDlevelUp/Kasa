import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"

import "./index.css";

// Import Pages 


// Import Components







// Import About


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />


            </Routes>

        </Router>
            </React.StrictMode>






)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();