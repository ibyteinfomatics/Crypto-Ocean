import Header from "./Header/Header";
import Sitebanner from "./SiteBanner/Sitebanner";
import Sitecontent from "./SiteContent/Sitecontent";
import '../assets/styles/style.css';
import Footer from "./Footer/Footer";
import '../assets/styles/banner.css';
const mainBanner = "./assets/images/banner--main.png";


function App() {
    return(
        <div className="page--wrapper">
            <div id="site__header" className="flex justify-between items-end py-4">
                <Header />
            </div>
            <div id="site__banner">
                <Sitebanner />
            </div>
            
            <div className="main--banner-image">
                <img src={mainBanner} alt="main banner" />
            </div>
            <div id="site__content">
                <Sitecontent />
            </div>
            <div id="site__footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
