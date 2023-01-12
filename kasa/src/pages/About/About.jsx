import "./About.css";
import Collapse from "../../components/Collapse/Collapse";
import BannerAbout from "../../components/BannerAbout/BannerAbout";


function About({ data }) {
    return (
        <div className="about-page">
            <BannerAbout />
            <div className="collapse-about">
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