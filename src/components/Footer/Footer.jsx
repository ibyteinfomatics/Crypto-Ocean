import Socialicons from "../Socialicons/Socialicons";

const footerbg = "./assets/images/footer-bg.jpg";
const footerlogo = "./assets/images/footer--logo.png";

function Footer(){
    return(
        <div id="site--footer">
            <div className="footer--bg">
                <img src={footerbg} alt="Footer Background" />
            </div>
            <div className="footer--wrapper">
                <div className="footer--content" data-aos="fade-right" data-aos-duration="1000">
                    <div className="footer--logo">
                        <a href="/">
                            <img src={footerlogo} alt="Footer Logo" />
                        </a>
                    </div>
                    <p><span>Join The Ocean</span>
                    Don't miss out on our limited collection of Magic Staffs</p>
                </div>
                <div className="site--social--icons">
                    <Socialicons />
                </div>
            </div>
            <div className="footer--bottom">
                <p>All Right Reserved 2021 @Ocean.org</p>
            </div>
        </div>
    )
}

export default Footer;