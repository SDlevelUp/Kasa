import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/banner.png";


function Home() {
    return (
        <main className="home">

            <Banner
                image={homeBanner}
                text="Chez vous, partout et ailleurs"
            />
        </main>

    );

}

export default Home;
