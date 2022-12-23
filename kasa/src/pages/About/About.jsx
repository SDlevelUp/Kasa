import "./About.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import banner from "../../assets/bannerAbout.png";
import Banner from "../../components/Banner/Banner";

function About({ data }) {
    return (
        <div className="about__page">
            <Banner className="banner__about" image={banner} />
            <div className="dropdown__about">
                {data.map((item) => (
                    <Dropdown
                        titre={item.title}
                        key={item.id}
                        description={item.content}>
                    </Dropdown>
                ))}
            </div>
        </div>
    )
}

export default About;