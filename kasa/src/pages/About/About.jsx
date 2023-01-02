import "./About.css";
import Collapse from "../../components/Collapse/Collapse";
// import banner from "../../assets/bannerAbout.png";
// import Banner from "../../components/Banner/Banner";
import BannerAbout from "../../components/BannerAbout/BannerAbout";


function About({ data }) {
    return (
        <div className="about_page">
            {/* <Banner className="about_banner" image={banner} /> */}
            <section>
                <BannerAbout />
            </section>
            <div className="collapse_about">
                {data.map((item) => (
                    <Collapse
                        titre={item.title}
                        key={item.id}
                        description={item.content}>
                    </Collapse>
                ))}
            </div>
        </div>
    )
}

export default About;