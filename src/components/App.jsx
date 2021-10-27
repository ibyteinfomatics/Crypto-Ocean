import Header from "./Header/Header";
import Sitebanner from "./SiteBanner/Sitebanner";
import Sitecontent from "./SiteContent/Sitecontent";
import '../assets/styles/style.css';

function App() {
    return(
        <div className="page--wrapper">
            <div id="site__header" className="lg:flex lg:justify-between lg:items-center py-4">
                <Header />
            </div>
            <div id="site__banner">
                <Sitebanner />
            </div>
            <div id="site__content">
                <Sitecontent />
            </div>
            <div id="site__footer">
                
            </div>
        </div>
    );
}

export default App;
