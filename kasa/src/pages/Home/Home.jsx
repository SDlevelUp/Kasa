import React from "react";
import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/banner.png";
import CardsDisplay from "../../components/CardsDisplay/CardsDisplay";
import "./Home.css";

function Home() {
    return (
        <main className="home">
            <Banner
                image={homeBanner}
                text="Chez vous, partout et ailleurs"
            />
            <CardsDisplay />
        </main>
    );

}

export default Home;
