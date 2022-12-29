import "./BannerAbout.css"


function BannerAbout({ image }) {
    return (
        <div className="banner-container">
            <div className="banner-background">
                <img src={image} alt="About banner" />
            </div>
        </div>
    );
}

export default BannerAbout;
