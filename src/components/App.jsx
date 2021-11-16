import Header from "./Header/Header";
import Sitebanner from "./SiteBanner/Sitebanner";
import Sitecontent from "./SiteContent/Sitecontent";
import '../assets/styles/style.css';
import Footer from "./Footer/Footer";
import '../assets/styles/banner.css';
import '../assets/styles/3d-slider.css';
import Bannerslider from "./Sitesliders/Bannersliders/Bannerslider";
import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const mainBanner = "./assets/images/banner--main.png";


function App() {
    useEffect(() => {
        Aos.init();
    }, []);
    return(
        <div className="page--wrapper">
            <div id="site__header" className="flex justify-between items-end py-4">
                <Header />
            </div>
            <div id="site__banner">
                <Sitebanner />
            </div>
            <div id="site__banner__slider">
                <Bannerslider />
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
