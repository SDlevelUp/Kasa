import logo from "../../assets/banner_Footer.png";
import "./Footer.css";


function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer__logo">
                    <img src={logo} alt="Footer logo" />
                </div>
                <div className="footer__allrights">
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;